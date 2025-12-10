import { Grid } from "@mui/material";
import type { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type Props = {
    products: Product[];
}

export default function ProductList({products}: Props) {
	return (
		<Grid container spacing={3}>
			{products.map((product) => (
				<Grid size={3} display="flex" key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	);
}
