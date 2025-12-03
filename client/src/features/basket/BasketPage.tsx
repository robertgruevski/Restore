import { Grid, Typography } from "@mui/material";
import { useFetchBasketQuery } from "./basketApi";
import BasketItem from "./BasketItem";
import OrderSummary from "../../app/shared/components/OrderSummary";

export default function BasketPage() {
    const {data, isLoading} = useFetchBasketQuery();

    if (isLoading) return <Typography>Loading basket...</Typography>

    if (!data) return <Typography variant="h3">Your basket is empty</Typography>

	return (
        <Grid container spacing={2}>
            <Grid size={8}>
                {data.items.map(item => (
                    <BasketItem item={item} key={item.productId} />
                ))}
            </Grid>
            <Grid size={4}>
                <OrderSummary />
            </Grid>
        </Grid>
    )
}
