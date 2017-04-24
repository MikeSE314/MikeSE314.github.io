/*
 Song.h
 lab 9 - Playlist
 
 Created by Micheal Erickson on 1/31/2017 at 2:19
 micheal.erickson3.14@gmail.com Section007
 
 Song
 
 methods:
    constructor(name, first line)
    play()
 variables:
    name
    first line
    num times played
 
 Song Class Declaration
*/

#ifndef SONG_H
#define SONG_H

#include <iostream>
#include <string>

class Song {
public:
	Song(std::string name, std::string firstLine);
	void Play();
	std::string GetName() const;
	std::string GetFirstLine() const;
	int GetPlays() const;
private:
	std::string songName;
	std::string firstLine;
	int numPlays;
};

#endif
