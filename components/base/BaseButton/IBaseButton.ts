export interface IBaseButton {
    variant?: 'primary' | 'default' | 'ghost' | 'link' | 'error' | 'success' | 'warning' | 'disabled';
    isDisabled?: boolean;
    content: string;
    to?: string;
}