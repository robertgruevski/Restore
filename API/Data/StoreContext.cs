using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole 
                { 
                    Id = "ea1df714-7934-4f65-8edd-32ef32afeaed",
                    ConcurrencyStamp = "3991a818-24c7-41ec-8cf0-8d17ef9009fc",
                    Name = "Member", 
                    NormalizedName = "MEMBER" 
                },
                new IdentityRole 
                { 
                    Id = "60bd8b8b-6b5c-48f8-9124-fa535bfa0d33", 
                    ConcurrencyStamp = "a91d7976-8d59-4671-962f-997aae0b0811",
                    Name = "Admin", 
                    NormalizedName = "ADMIN" 
                }
            );
    }
}
