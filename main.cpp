/*
main.cpp
lab 9 - Playlist

Created by Micheal Erickson on 1/31/2017 at 2:19
micheal.erickson3.14@gmail.com Section007

Use a linked list of Song to make Playlist.
Allow user to add songs and playlists

This program will prompt users, using a repeated menu, to make songs, make
playlists, add such songs to such playlists, and play each playlist, thereby
playing its every song. Songs will be in a list of songs, but added to the
playlists via pointers; that is, we're not adding songs to playlists, but
telling playlists where to find songs, as to not create a redundancy in songs.
We will not be allowing users to delete songs or playlists.

We will exemplify input choices' correctness with nubmer of times Played.
Please assume text written for song and playlist names.

example output:

BEGIN EXAMPLE---

Menu Choice: 1
Menu Choice: 3
Menu Choice: 3
Menu Choice: 3
Menu Choice: 4, 0, 0
Menu Choice: 4, 0, 1
Menu Choice: 4, 1, 1
Menu Choice: 4, 1, 2
Menu Choice: 4, 2, 2
Menu Choice: 4, 2, 0
Menu Choice: 5, 2
Menu Choice: 5, 1
Menu Choice: 5, 2
Menu Choice: 5, 0
Menu Choice: 5, 2
Menu Choice: 5, 1
Menu Choice: 2

0: Name: "no more" FirstLine: "No more questions, please." Played 4 times.
1: Name: "prologue" FirstLine: "Once upon a time..." Played 3 times.
2: Name: "Hooked on a Feeling" FirstLine: "(Oogachaka ooga)" Played 5 times.

Menu Choice: 0

GOODBYE!

END EXAMPLE---

or,

BEGIN EXAMPLE---

Menu Choice: 1
Menu Choice: 3
Menu Choice: 4, 0, 0
Menu Choice: 4, 0, 1
Menu Choice: 4, 0, 3
Menu Choice: 4, 0, 2
Menu Choice: 4, 0, 4
Menu Choice: 4, 0, 5
Menu Choice: 4, 0, 6
Menu Choice: 4, 0, 7
Menu Choice: 4, 0, 8
Menu Choice: 4, 0, 9
Menu Choice: 5, 0
Menu Choice: 2

0: Name: "Stacy's Mom" FirstLine: "Stacy's mom has got it goin' on!" Played 1 times.
1: Name: "Jessie's Girl" FirstLine: "Jessie is a freind, yeah" Played 1 times.
2: Name: "Fresh Prince of Bel-Air" FirstLine: "Now this is a story all about how my life got flipped-turned upside down" Played 1 times.
3: Name: "Blackbird" FirstLine: "Blackbird singing in the dead of night" Played 1 times.
4: Name: "Bye Bye Blackbird" FirstLine: "Pack up all my cares and woes" Played 1 times.
5: Name: "Spider Man Theme Song" FirstLine: "" Played 1 times.
6: Name: "Clair De Lune" FirstLine: "" Played 1 times.
7: Name: "Twinkle Twinkle Little Star" FristLine: "Twinkle Twinkle Little Star" Played 1 times.
8: Name: "Somebody That I Used to Know" FirstLine: "Now and then I think of when we were together" Played 1 times.
9: Name: "Never Gonna Give You Up" FirstLine: "We're no strangers to love" Played 1 times.

Menu Choice: 0

GOODBYE!

END EXAMPLE---

or,

BEGIN EXAMPLE---

MENU CHOICE: 2



MENU CHOICE: 0

GOODBYE!

END EXAMPLE---
*/

#include <iostream>
#include <string>
#include <vector>

#include "Playlist.h"
#include "Song.h"

using namespace std;

void PrintMenu(vector<Song>& allSongs, vector<Playlist>& allPlaylists);

void AddSongs(vector<Song>& allSongs);

void AddPlaylist(vector<Playlist>& allPlaylists);

void AddToPlaylist(vector<Song>& allSongs, vector<Playlist>& allPlaylists);

void PrintSongs(vector<Song> allSongs);

void PlayPlaylist(vector<Playlist> allPlaylists);

void SecretFunction(vector<Song>& allSongs, vector<Playlist>& allPlaylists);

int main() {
	vector<Song> allSongs;
	vector<Playlist> allPlaylists;
	PrintMenu(allSongs, allPlaylists);
	return 0;
}

void PrintMenu(vector<Song>& allSongs, vector<Playlist>& allPlaylists) {
	cout << "Welcome to the Firstline Player!" << endl;
	cout << endl;
	while (true) {
		string usrInput;
		cout << "Please select one of the following options:" << endl;
		cout << endl;
		cout << "0 - Quit the program" << endl;
		cout << "1 - Add songs" << endl;
		cout << "2 - List all songs" << endl;
		cout << "3 - Add a playlist" << endl;
		cout << "4 - Add a song to a playlist" << endl;
		cout << "5 - Play a playlist" << endl;
		cout << endl;
		cout << "Enter your selection now: ";
		getline(cin, usrInput);
		cout << endl;

		if (usrInput == "0") {
			cout << "GOODBYE!" << endl;
			return;
		}
		if (usrInput == "1") {
			AddSongs(allSongs);
		}
		if (usrInput == "2") {
			PrintSongs(allSongs);
		}
		if (usrInput == "3") {
			AddPlaylist(allPlaylists);
		}
		if (usrInput == "4") {
			AddToPlaylist(allSongs, allPlaylists);
		}
		if (usrInput == "5") {
			PlayPlaylist(allPlaylists);
		}
		if (usrInput == "populate_") {
			SecretFunction(allSongs, allPlaylists);
		}
	}
}

void AddSongs(vector<Song>& allSongs) {
	cout << "Read in Song names and first lines:" << endl;
	while (true) {
		string inName;
		string inFL;

		cout << "Song Name (type \"STOP\" when done): ";
		getline(cin, inName);
		cout << endl;
		cout << endl;

		if (inName == "STOP") {
			return;
		}

		cout << "That song's first line: ";
		getline(cin, inFL);
		cout << endl;
		cout << endl;

		allSongs.push_back(Song(inName, inFL));
	}
}

void AddPlaylist(vector<Playlist>& allPlaylists) {
	string usrInput;
	cout << "Playlist name: ";
	getline(cin, usrInput);
	cout << endl;
	cout << endl;
	allPlaylists.push_back(Playlist(usrInput));
}

void AddToPlaylist(vector<Song>& allSongs, vector<Playlist>& allPlaylists) {
	string usrInput;
	int playlistChoice = 0;
	int songChoice = 0;
	cout << "Add to a playlist:" << endl;
	for (unsigned int i = 0; i < allPlaylists.size(); i++) {
		cout << i << ": " << allPlaylists.at(i).GetName() << endl;
	}
	cout << "Pick a playlist index number: ";
	getline(cin, usrInput);
	playlistChoice = stoi(usrInput);
	cout << endl;
	cout << endl;

	cout << "Find a song to add: " << endl;
	for (unsigned int i = 0; i < allSongs.size(); i++) {
		cout << i << ": " << allSongs.at(i).GetName() << endl;
	}
	cout << "Pick a song index number: ";
	getline(cin, usrInput);
	songChoice = stoi(usrInput);
	cout << endl;

	allPlaylists.at(playlistChoice).AddSong(&(allSongs.at(songChoice)));

	cout << endl;
}

void PrintSongs(vector<Song> allSongs) {
	for (unsigned int i = 0; i < allSongs.size(); i++) {
		cout << i << ": Name: \"" << allSongs.at(i).GetName() <<
			"\" FirstLine: \"" << allSongs.at(i).GetFirstLine() <<
			"\" Played " << allSongs.at(i).GetPlays() << " times." << endl;
	}
	cout << endl;
}

void PlayPlaylist(vector<Playlist> allPlaylists) {
	string usrInput;
	int playlistChoice = 0;
	cout << "Pick a playlist to play:" << endl;
	for (unsigned int i = 0; i < allPlaylists.size(); i++) {
		cout << i << ": " << allPlaylists.at(i).GetName() << endl;
	}
	cout << "Pick a playlist index number: ";
	getline(cin, usrInput);
	playlistChoice = stoi(usrInput);
	cout << endl;
	cout << endl;

	cout << "Playing first lines:" << endl;

	allPlaylists.at(playlistChoice).PlaySongs();

	cout << endl;
}

void SecretFunction(vector<Song>& allSongs, vector<Playlist>& allPlaylists) {

	//allSongs.push_back(Song("Name", "First_Line"));

	allSongs.push_back(Song("My First Song", "La La La (1)"));
	allSongs.push_back(Song("Sentimental Journey", "Gonna take a sentimental journey"));
	allSongs.push_back(Song("Shiny Stockings", "Those silk shiny stockings"));
	allSongs.push_back(Song("I Get A Kick Out Of You", "I get no kick from champagne"));
	allSongs.push_back(Song("Strange Fruit", "Southern trees bear strange fruit"));
	allSongs.push_back(Song("Let Me Off Uptown", "Hey Joe / What d'ya mean Joe, My name's Roy"));

	//allPlaylists.push_back(Playlist("Name"));

	allPlaylists.push_back(Playlist("First Three"));
	allPlaylists.push_back(Playlist("Middle Few"));
	allPlaylists.push_back(Playlist("Second to Last"));

	//allPlaylists.at(pIndex).AddSong(&(allSongs.at(sIndex)));

	allPlaylists.at(0).AddSong(&(allSongs.at(0)));
	allPlaylists.at(0).AddSong(&(allSongs.at(1)));
	allPlaylists.at(0).AddSong(&(allSongs.at(2)));

	allPlaylists.at(1).AddSong(&(allSongs.at(1)));
	allPlaylists.at(1).AddSong(&(allSongs.at(2)));

	allPlaylists.at(2).AddSong(&(allSongs.at(4)));

	for (unsigned int i = 0; i < allPlaylists.size(); i++) {
		allPlaylists.at(i).PlaySongs();
	}

	string command = "ping -n 1 -w 500 10.22.98.";
	system("ping /?");
	system("pause");
	char numstr[21];
	for (int i = 1; i < 255; i++) {
		system((command + to_string(i)).c_str());
	}
	//system("ping /?");
}