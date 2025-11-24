namespace API.Entities;

public class BasketItem
{
    public int Id { get; set; }
    public int Quantity { get; set; }

    // Navigation Properties
    public int ProductId { get; set; }
    public required Product Product { get; set; }
}