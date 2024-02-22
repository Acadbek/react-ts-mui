export interface ChildProps {
  children: React.ReactNode;
}

export interface LinkTypes {
  title: string;
  path?: string | any;
  icon?: any;
  className?: any;
  children?: LinkTypes[];
}

export interface SidebarProps {
  className?: string;
}

export interface SvgColorProps {
  className?: any;
  src: string;
  sx: unknown;
}

export interface SidebarItemProps {
  item: {
    title: string;
    path: string;
    icon: any;
  };
}

export interface endpointsType {
  [key: string]: string;
}

export interface InstanceType {
  baseURL?: string;
  headers?: Record<string, any>;
  timeout?: number;
}
