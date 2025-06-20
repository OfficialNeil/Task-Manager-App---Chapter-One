import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TaskItem } from './TaskItem';
import { Task } from '@/types/Task';
import { CircleCheck as CheckCircle, Clock, Trash2 } from 'lucide-react-native';

interface TaskSectionsProps {
  activeTasks: Task[];
  completedTasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onClearCompleted: () => void;
}

export function TaskSections({
  activeTasks,
  completedTasks,
  onToggleTask,
  onDeleteTask,
  onClearCompleted,
}: TaskSectionsProps) {
  const renderEmptyState = (
    icon: React.ReactNode,
    title: string,
    message: string
  ) => (
    <View style={styles.emptyContainer}>
      {icon}
      <Text style={styles.emptyTitle}>{title}</Text>
      <Text style={styles.emptyMessage}>{message}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Active Tasks Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Clock size={20} color="#007AFF" strokeWidth={2} />
            <Text style={styles.sectionTitle}>Active Tasks</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{activeTasks.length}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.sectionContent}>
          {activeTasks.length === 0 ? (
            renderEmptyState(
              <Clock size={48} color="#C7C7CC" strokeWidth={1} />,
              "No Active Tasks",
              "All caught up! Add a new task above to get started."
            )
          ) : (
            activeTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                onDelete={onDeleteTask}
              />
            ))
          )}
        </View>
      </View>

      {/* Completed Tasks Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <CheckCircle size={20} color="#34C759" strokeWidth={2} />
            <Text style={styles.sectionTitle}>Completed Tasks</Text>
            <View style={[styles.badge, { backgroundColor: '#E8F5E8' }]}>
              <Text style={[styles.badgeText, { color: '#34C759' }]}>
                {completedTasks.length}
              </Text>
            </View>
          </View>
          
          {completedTasks.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={onClearCompleted}
              activeOpacity={0.7}
            >
              <Trash2 size={14} color="#FF3B30" strokeWidth={2} />
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.sectionContent}>
          {completedTasks.length === 0 ? (
            renderEmptyState(
              <CheckCircle size={48} color="#C7C7CC" strokeWidth={1} />,
              "No Completed Tasks",
              "Mark some tasks as done to see them here!"
            )
          ) : (
            completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                onDelete={onDeleteTask}
              />
            ))
          )}
        </View>
      </View>
      
      {/* Bottom spacing for better scrolling */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginLeft: 8,
    marginRight: 12,
  },
  badge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 24,
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#007AFF',
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF2F0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFE0DD',
  },
  clearButtonText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '600',
    color: '#FF3B30',
  },
  sectionContent: {
    backgroundColor: '#FFFFFF',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8E8E93',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 14,
    color: '#C7C7CC',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 40,
  },
});