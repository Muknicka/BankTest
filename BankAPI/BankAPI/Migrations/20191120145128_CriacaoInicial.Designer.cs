﻿// <auto-generated />
using System;
using BankAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BankAPI.Migrations
{
    [DbContext(typeof(ClientContext))]
    [Migration("20191120145128_CriacaoInicial")]
    partial class CriacaoInicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.1");

            modelBuilder.Entity("BankAPI.Models.Client", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Complemento")
                        .HasColumnType("TEXT");

                    b.Property<int?>("CountryID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Documento")
                        .HasColumnType("TEXT");

                    b.Property<string>("Endereco")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("ID");

                    b.HasIndex("CountryID");

                    b.ToTable("Client");
                });

            modelBuilder.Entity("BankAPI.Models.Country", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Capital")
                        .HasColumnType("TEXT");

                    b.Property<string>("Continente")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pais")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Country");
                });

            modelBuilder.Entity("BankAPI.Models.Client", b =>
                {
                    b.HasOne("BankAPI.Models.Country", "Country")
                        .WithMany()
                        .HasForeignKey("CountryID");
                });
#pragma warning restore 612, 618
        }
    }
}