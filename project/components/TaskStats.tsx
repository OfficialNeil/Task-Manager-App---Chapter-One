import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TaskStatsProps {
  totalTasks: number;
  activeTasks: number;
  completedTasks: number;
}

// TaskStats.tsx
// This component displays statistics about the tasks: total, active, completed, and progress percentage.


export function TaskStats({ totalTasks, activeTasks, completedTasks }: TaskStatsProps) {
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{totalTasks}</Text>
        <Text style={styles.statLabel}>Total</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.statItem}>
        <Text style={[styles.statNumber, { color: '#007AFF' }]}>{activeTasks}</Text>
        <Text style={styles.statLabel}>Active</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.statItem}>
        <Text style={[styles.statNumber, { color: '#34C759' }]}>{completedTasks}</Text>
        <Text style={styles.statLabel}>Done</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.statItem}>
        <Text style={[styles.statNumber, { color: '#FF9500' }]}>{completionRate}%</Text>
        <Text style={styles.statLabel}>Progress</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  separator: {
    width: 1,
    height: 30,
    backgroundColor: '#F2F2F7',
    marginHorizontal: 8,
  },
});