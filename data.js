var APP_DATA = {
  "scenes": [
    {
      "id": "0-sous-sol---music-room",
      "name": "Sous Sol - Music room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0977983872452768,
          "pitch": 0.2569041568714283,
          "rotation": 0,
          "target": "1-sous-sol---game-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sous-sol---game-room",
      "name": "Sous Sol - Game room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.46929628709322735,
          "pitch": 0.18975258538792517,
          "rotation": 0,
          "target": "2-sous-sol---corridor"
        },
        {
          "yaw": 0.2894417441939705,
          "pitch": 0.24826714118774262,
          "rotation": 0,
          "target": "2-sous-sol---corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sous-sol---corridor",
      "name": "Sous Sol - Corridor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.192136059157411,
          "pitch": 0.4175472906967723,
          "rotation": 0,
          "target": "1-sous-sol---game-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
