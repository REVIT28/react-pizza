export type CartItem = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  price: number;
  count: number;
  size: number;
};

export interface CartSlixeState {
  totalPrice: number;
  items: CartItem[];
}
