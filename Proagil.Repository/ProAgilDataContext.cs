using Microsoft.EntityFrameworkCore;
using Proagil.Domain;

namespace ProAgil.Repository
{
    public class ProAgilDataContext : DbContext
    {
        public ProAgilDataContext(DbContextOptions<ProAgilDataContext> options) :  base (options)
        {
            
        }

        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Palestrante> Palestrantes { get; set; }
        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; }
        public DbSet<Lote> Lotes { get; set; }
        public DbSet<RedeSocial> RedeSociais { get; set; }

        protected override void OnModelCreating (ModelBuilder modelBiuder) 
        {  
            modelBiuder.Entity<PalestranteEvento>()
                .HasKey(PE => new { PE.EventoId, PE.PalestranteId });
        }

    }
}