import type { IconName } from '@/shared/ui';

export interface ProfileMenuTab {
  title: string;
  icon?: IconName;
  route?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?(...args: any): void;
}
