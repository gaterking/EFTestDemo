using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF.Model
{
    public class EFModelContext : DbContext
    {
        public EFModelContext()
            : base()
        {
            Database.SetInitializer<EFModelContext>(null);
        }
        public virtual DbSet<Contract> Contracts { get; set; }
        public virtual DbSet<ContractDetail> ContractDetails { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contract>().ToTable("Contract").HasKey<int>(m => m.Id)
                .Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<ContractDetail>().ToTable("ContractDetail").HasKey<int>(m=>m.Id)
                .Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<ContractDetail>().HasRequired(m => m.Contract)
                    .WithMany(s => s.ContractDetails);

        }

    }

}
