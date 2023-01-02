const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Demon Slayer: Kimetsu no Yaiba Le train de l'infini - VF",
      description: "Vous regardez",
      image: "https://freakingeek.com/wp-content/uploads/2021/05/DemonSlayeFilmr-Banniere-800x445.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m108.syncusercontent.com/mfs-60:41bc83b5bb505e3b31e872e3b58bbe5f=============================/p/le%20train%20de%20l'infini%20dub.mp4?allowdd=0&datakey=EA/Tg3BHfGbjt6BYxrtMSgIBg7lOWxrir/pwyX48udVrOQC7M/Sc6DjgX66VcMo5H2sQAteDsz0Dh8huz6ykd9y1vM5uKn8wwxUwKjrppTTORpO0lbMt4wkHuCBLJ2CAMcXPeBJCaLBGTw59FTnTeV7PusGqluzAwDDGnL56PK9jd2uaYa3pIS1JfCFklewcZJitpjOALezkT8unJU6qnJ4N1W85KJElNfWyIfnQuRmBNi/Yx8hIQw6uy6fY6go6xo7U4a14kwYESasBzplnMj9Ob66B9QxBMQa+FWPzJmWTFW4Jdl5kJ3BlXn1DF1zC2qAcwgnC7CFjLfEKULohYw&engine=ln-2.3.7.3&errurl=jM7/4UDm+ucdxPADs+hu7mvy97jCM7RwxRqscPTz1kmvvbICawQaJZmLeG0/d43nGJJ7kCii0Fe6s8i+ZIxox14Kmf14YG9RnKRwuEsach4gMkhRPwNaA8J5M8VuYvdlhz0Odz7ef7g8tEYIst52zdJEnMbkVsIvJKjIgkNpOBGaD0PTWK9IhyPdOxSd2arZyX8iGQQVb+H9C4ByU6pq0QhTBfej1u8eSuBdrP/0DjDkfQSUB+rteYP7KHUr/XwoYifIpZtYDvZS2tp3WMBrLy8fPvzaaiBoSZCvO4oPxqvLD8OxGbu7/obeLnlJqai2/8rttAEEu5Y3BdKhHMGIvQ==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0ibGUlMjB0cmFpbiUyMGRlJTIwbCdpbmZpbmklMjBkdWIubXA0IjtmaWxlbmFtZSo9VVRGLTgnJ2xlJTIwdHJhaW4lMjBkZSUyMGwnaW5maW5pJTIwZHViLm1wNDs&ipaddress=1458994159&linkcachekey=6e8641350&linkoid=652410001&mode=101&sharelink_id=9106224960001&timestamp=1672675871784&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=cceae6ab5fbcde7c0a977a7b7724d8bcaa9b6f6c&cachekey=60:41bc83b5bb505e3b31e872e3b58bbe5f=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
