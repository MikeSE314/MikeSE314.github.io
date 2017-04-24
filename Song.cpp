/*
 Song.cpp
 lab 9 - Playlist
 
 Created by Micheal Erickson on 1/31/2017 at 2:19
 micheal.erickson3.14@gmail.com Section007
 
 Song Class Definition
*/

#include "Song.h"

Song::Song(std::string name, std::string firstLine) {
	this->songName = name;
	this->firstLine = firstLine;
	this->numPlays = 0;
	return;
}

void Song::Play() {
	std::cout << firstLine << std::endl;
	this->numPlays++;
}

std::string Song::GetName() const {
	return this->songName;
}

std::string Song::GetFirstLine() const {
	return this->firstLine;
}

int Song::GetPlays() const {
	return this->numPlays;
}
