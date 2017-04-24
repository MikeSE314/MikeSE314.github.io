/*
 Playlist.h
 lab 9 - Playlist
 
 Created by Micheal Erickson on 1/31/2017 at 2:19
 micheal.erickson3.14@gmail.com Section007
 
 Playlist Class Declaration
 
 Playlist
 
 method:
	 constructor(name)
	 add song(song*)
	 Play songs()
 variables:
 	list of song*
 	name
 */

#ifndef PLAYLIST_H
#define PLAYLIST_H

#include <iostream>
#include <vector>

#include "Song.h"

class Playlist {
public:
	Playlist();
	Playlist(std::string name);
	void AddSong(Song* newSong);
	void PlaySongs() const;
    std::string GetName() const;
private:
	std::string name;
	std::vector<Song*> songs;
};

#endif
