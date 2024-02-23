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

export interface ModalTypes {
  brands?: {
    guid: string;
    id: number;
    title: string;
  };
  category?: {
    guid: string;
    id: number;
    title: string;
  };
  errorBrand?: any;
}

export interface DataType {
  guid: string;
  id: number;
  title: string;
}

export interface StepProps {
  next: () => void;
  prev: () => void;
  keyboardLang?: DataType[];
  memory?: DataType[];
  storages?: DataType[];
  warranty?: DataType[];
  warrantyType?: DataType[];
  taxRule?: DataType[];
  minOrder?: DataType[];
}

export interface ProductBrand {
  brands: {
    guid: string;
    id: number;
    title: string;
  };
}

export interface ProductCategory {
  category: {
    guid: string;
    id: number;
    title: string;
  };
}
