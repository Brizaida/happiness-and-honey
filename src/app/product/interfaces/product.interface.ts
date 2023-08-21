
export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  whatsapp?: string;
  precio: number;
  imagen: string;
  stock?: number;
  oferta?: boolean;
  cantidad?: number;
}
