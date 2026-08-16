export type ModalType = 
  | 'works' 
  | 'resume' 
  | 'philosophy' 
  | 'stories' 
  | 'services' 
  | 'contact' 
  | 'about' 
  | 'collectibles' 
  | 'mysterybox' 
  | 'moments' 
  | string;

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  image: string;
  description?: string;
  [key: string]: any;
}
