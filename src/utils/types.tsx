export interface VendorsDataItem {
  id: number;
  imgSrc: string;
  name: string;
}

export interface Vendor {
  name: string;
  imgSrc: string;
}

export interface VendorVerifyCompProps {
  org: string;
  openModal: boolean; // Add the openModal property
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AdminUser {
  username: string;
  email: string;
  profilePic?: string;
  role: "superadmin" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface VendorUser {
  username: string;
  email: string;
  orgPic?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminContextType {
  adminUser: AdminUser | null;
  setAdminUser: React.Dispatch<React.SetStateAction<AdminUser | null>>;
  logout: () => void;
  login: (user: AdminUser) => void;
  showModal: boolean;
}

export interface VendorContextType {
  vendorUser: VendorUser | null;
  setVendorUser: React.Dispatch<React.SetStateAction<VendorUser | null>>;
  logout: () => void;
  login: (user: VendorUser) => void;
  showModal: boolean;
}

export type Certificate = {
  _id: string;
  name: string;
  type: string;
  issueDate: string;
  certificateId: string;
  rollNo: string;
};

export type Vendors = {
  _id: string;
  name: string;
  email: string;
  orgPic: string;
};

export interface VendorLoginModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orgData: Vendor | null; // Accept orgData as a prop
}
