import { Box, Paper } from "@mui/material";
import type { Item } from "../../app/models/basket";

type Props = {
	item: Item;
};

export default function BasketItem({ item }: Props) {
	return (
		<Paper
			sx={{
				height: 140,
				borderRadius: 3,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				mb: 2,
			}}>
			<Box display="flex" alignItems="center">
				<Box
					component="img"
					src={item.pictureUrl}
					alt={item.name}
					sx={{
						width: 100,
						height: 100,
						objectFit: "cover",
						borderRadius: "4px",
						mr: 8,
						ml: 4,
					}} />
                <Box display="flex" flexDirection="column" gap={1}>

                </Box>
			</Box>
		</Paper>
	);
}
