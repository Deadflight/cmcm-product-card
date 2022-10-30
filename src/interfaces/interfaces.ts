import {
	ProductButtonsProps,
	ProductCardProps,
	ProductImageProps,
	ProducTitleProps,
} from "../components";

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	product: Product;
	maxCount?: number;
	increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: ({ title, className }: ProducTitleProps) => JSX.Element;
	Image: ({ img, className }: ProductImageProps) => JSX.Element;
	Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
	product: Product;
	count: number;
}

export interface ProductInCart extends Product {
	count: number;
}

export interface InitialValuesProps {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;

	increaseBy: (value: number) => void;
	reset: () => void;
}
