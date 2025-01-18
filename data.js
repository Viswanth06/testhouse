var APP_DATA = {
  "scenes": [
    {
      "id": "0-games-room",
      "name": "Games room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7477290052459864,
          "pitch": 0.1237719875227885,
          "rotation": 0,
          "target": "1-music-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-music-room",
      "name": "Music room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5847359202309557,
          "pitch": 0.11581429477463878,
          "rotation": 0,
          "target": "0-games-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CommHostelTst",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
