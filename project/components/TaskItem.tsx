import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import { Check, Trash2 } from 'lucide-react-native';
import { Task } from '@/types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const handleToggle = () => {
    scale.value = withSequence(
      withTiming(0.95, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );
    onToggle(task.id);
  };

  const handleDelete = () => {
    scale.value = withTiming(0.8, { duration: 200 });
    opacity.value = withTiming(0, { duration: 200 });
    setTimeout(() => onDelete(task.id), 200);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={handleToggle}
        activeOpacity={0.7}
      >
        <View style={[
          styles.checkbox,
          task.completed && styles.checkboxCompleted
        ]}>
          {task.completed && (
            <Check size={14} color="#FFFFFF" strokeWidth={3} />
          )}
        </View>
      </TouchableOpacity>

      <Pressable style={styles.content} onPress={handleToggle}>
        <Text style={[
          styles.taskText,
          task.completed && styles.taskTextCompleted
        ]}>
          {task.text}
        </Text>
        <Text style={styles.dateText}>
          {task.completed && task.completedAt
            ? `Completed ${formatDate(task.completedAt)}`
            : `Created ${formatDate(task.createdAt)}`
          }
        </Text>
      </Pressable>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
        activeOpacity={0.7}
      >
        <Trash2 size={18} color="#FF3B30" strokeWidth={2} />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  checkboxContainer: {
    marginRight: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#C7C7CC',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxCompleted: {
    backgroundColor: '#34C759',
    borderColor: '#34C759',
  },
  content: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    marginBottom: 4,
  },
  taskTextCompleted: {
    color: '#8E8E93',
    textDecorationLine: 'line-through',
  },
  dateText: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: '400',
  },
  deleteButton: {
    marginLeft: 16,
    padding: 8,
  },
});