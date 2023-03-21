﻿using MagicVilla_VillaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MagicVilla_VillaAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            :base(options)
        {   
        }
        public DbSet<Villa> Villas { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Villa>().HasData(
                new Villa()
                {
                    Id = 1,
                    Name = "Royal Villa",
                    Details = "lorem ipsum",
                    ImageUrl = "data:image/jpeg;base64,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",
                    Occupancy = 5,
                    Rate = 200,
                    SqFt = 550,
                    Amenity = "",
                    CreatedDate = DateTime.Now
                },
                new Villa()
                {
                    Id = 2,
                    Name = "Villa Express",
                    Details = "lorem ipsum blah blah blah",
                    ImageUrl = "https://cf.bstatic.com/xdata/images/hotel/max1280x900/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1",
                    Occupancy = 8,
                    Rate = 500,
                    SqFt = 1000,
                    Amenity = "",
                    CreatedDate = DateTime.Now

                }
                );
        }
    }
}
