/*
 Playlist.cpp
 lab 9 - Playlist
 
 Created by Micheal Erickson on 1/31/2017 at 2:19
 micheal.erickson3.14@gmail.com Section007
 
 Playlist Class Definition
 */

#include "Playlist.h"

Playlist::Playlist() {
	this->name = "none";
}

Playlist::Playlist(std::string name) {
	this->name = name;
}

void Playlist::AddSong(Song * newSong) {
	this->songs.push_back(newSong);
}

void Playlist::PlaySongs() const {
	for (int i = 0; i < this->songs.size(); i++) {
		(*(this->songs.at(i))).Play();
	}
}

std::string Playlist::GetName() const {
    return this->name;
}
