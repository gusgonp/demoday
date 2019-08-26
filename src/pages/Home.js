import React from 'react';
import Card from '../components/Card';

// API
const cardElements = [
    {
      id: 1,
      title: 'Reporte 24 hrs urgente',
      author: 'Photo by Immo Wegmann',
      cover: 'https://images.unsplash.com/photo-1550133881-13e70aa00bae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'
    },
    {
      id: 2,
      title: 'Relación donativo Mes Año',
      author: 'Photo by Philip Veater',
      cover: 'https://images.unsplash.com/photo-1517232117795-40c9d8212a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    },
    {
      id: 3,
      title: 'Reporte donativo ID interno',
      author: 'Photo by Jp Valery',
      cover: 'https://images.unsplash.com/photo-1554672723-d42a16e533db?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 1,
      title: 'Reporte donativo menor 1605',
      author: 'Photo by Jp Valery',
      cover: 'https://images.unsplash.com/photo-1561102427-0b1bb2138007?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 2,
      title: 'Reporte donativo igual mayor umbral 1605',
      author: 'Photo by Dmitry Demidko',
      cover: 'https://images.unsplash.com/photo-1543699539-33a389c5dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 3,
      title: 'Reporte donativo igual o mayor 3210',
      author: 'Photo by Sven Schreiber',
      cover: 'https://images.unsplash.com/photo-1566482050417-c637a290623d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80'
    },
    {
      id: 1,
      title: 'Formato ID unitaria donativo expediente donante',
      author: 'Photo by Dima Pechurin',
      cover: 'https://images.unsplash.com/photo-1557167668-6eb71e76b603?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 2,
      title: 'Formato aviso donativo presentar aviso',
      author: 'Photo by Ishant Mishra ',
      cover: 'https://images.unsplash.com/photo-1509603148757-f2a393f18afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=726&q=80'
    },
    {
      id: 3,
      title: 'Relación donativo menor 1605 UMA',
      author: 'Photo by Jason Roberts ',
      cover: 'https://images.unsplash.com/photo-1565126035964-29e1c95b13f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 1,
      title: 'Relación donativo menor 1605 UMA',
      author: 'Photo by Amanda Jones ash',
      cover: 'https://images.unsplash.com/photo-1542145272-597f274b38ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
    },
    {
      id: 2,
      title: 'Relación donativo menor 1605 UMA',
      author: 'Photo by Jp Valery ash',
      cover: 'https://images.unsplash.com/photo-1532221768986-86ff47d87934?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'Relación donativo menor 1605 ',
      author: 'Photo by Tim Marshall ',
      cover: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 1,
      title: 'Relación donativo menor ',
      author: 'Photo by Bill Oxford ',
      cover: 'https://images.unsplash.com/photo-1560575193-c2c9e886aefe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 2,
      title: 'Reporte filtro 01',
      author: 'Photo by rupixen ',
      cover: 'https://images.unsplash.com/photo-1565514021506-1dc81b752c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 3,
      title: 'Reporte filtro 02',
      author: 'Photo by Sharon McCutcheon ',
      cover: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      id: 1,
      title: 'Reporte filtro 03',
      author: 'Photo by Pavel Churiumov ',
      cover: 'https://images.unsplash.com/photo-1501102057089-b3e50a55eff6?ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80'
    },
    {
      id: 2,
      title: 'Reporte filtro 04',
      author: 'Photo by Todd Trapani ',
      cover: 'https://images.unsplash.com/photo-1538263270005-4261e0419b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
    },
    {
      id: 3,
      title: 'Reporte filtro 05',
      author: 'Photo by Kim Gorga',
      cover: 'https://images.unsplash.com/photo-1517448988499-4cdc5bbde64c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    }
];
  

const Home = () => (
    <>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Monitorg</h1>
            <h2 className="hero-subtitle">Transparencia, Cumplimiento, Control.</h2>
          </div>
        </section>
        <section className="content">
          <div className="container grid-container">
            {cardElements.map((card, index) =>
              <Card key={index} card={card} />)}
          </div>
          <div className="container">
            <button className="btn-showmore">Show more</button>
          </div>
        </section>
    </>
);

export default Home;
