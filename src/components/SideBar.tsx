import { useState, useEffect } from 'react';
import { Button } from '../components/Button'
import { api } from '../services/api';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
  selectGenre: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, selectGenre }: SideBarProps) {
  function handleClickButton(id: number) {
    selectGenre(id);
  }

  return (
    <nav className="sidebar">
      <header>Watch<p>Me</p></header>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}