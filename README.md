# CMCM-Product-Card

This is a test package to deploy

### Carlos Correa

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'cmcm-product-card'
```

```
<ProductCard
		product={product}
		initialValues={{
		  count: 0,
		  maxCount: 14,
		}}
>
	{({
		count,
		isMaxCountReached,
		maxCount,
    increaseBy,
		reset,
	}) => (
		<>
			<ProductImage />
			<ProductTitle />
			<ProductButtons
				style={{
					display: "flex",
					justifyContent: "end",
				}}
			/>
		</>
	)}
</ProductCard>
```
