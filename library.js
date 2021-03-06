var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


  // FUNCTIONS TO IMPLEMENT:

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

  printPlaylists: function () {
    for(var playlist in this.playlists) {
      console.log(`${this.playlists[playlist].id}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`);
    }
  },


  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    for (var track in this.tracks) {
      console.log(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
    }
  },



  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    console.log(`${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`);
    for (var track of this.playlists[playlistId].tracks) {
      var this_tracks = this.tracks[track];
      console.log(`${this_tracks.id}: ${this_tracks.name} by ${this_tracks.artist} (${this_tracks.album})`);
    }
  },


  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    return this.playlists[playlistId].tracks.push(this.tracks[trackId].id);
  },



  // generates a unique id
  // (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },



  // adds a track to the this

  addTrack: function (name, artist, album) {
    var new_track = {
      id: this.uid(),
      name: name,
      artist: artist,
      album: album
    };
    this.tracks[new_track.id] = new_track;
  },



  // adds a playlist to the this

  addPlaylist: function (name) {
    var new_playlist = {
      id: this.uid(),
      name: name,
      tracks: []
    };
    this.playlists[new_playlist.id] = new_playlist;
  },

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  printSearchResults: function(query) {
    var found = false;
    for (var track in this.tracks){
      for (var attribute in this.tracks[track]) {
        var wordIndex;
        wordIndex = this.tracks[track][attribute].search(query);
        if (wordIndex > -1) {
          console.log([track]);
          found = true;
        }
      }
    }
    if (!found) {
      console.log("This word was not found");
    }
  }
};

library.addPlaylist("amna");
console.log(library);



