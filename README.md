# 🧩 4x4 Sliding Picture Puzzle Game (Javascript)

![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![Responsive](https://img.shields.io/badge/Responsive%20Design-success)
![Version](https://img.shields.io/badge/Version-1.0-lightgrey)

A clean and interactive **4×4 sliding picture puzzle game** built with **HTML, CSS, and JavaScript**.  Players rearrange scrambled image tiles to form the complete picture. Includes **shuffle**, **reset**, and **move counter** features.Optimized for the Desktop, Tablets and Mobile Views.

---

## 📝 About This README

This `README.md` provides complete documentation for the **4×4 Sliding Picture Puzzle Game** Project, including features, working explanation, folder structure, setup instructions, and demo link.

---

## 🧾 Overview

The **4×4 Picture Puzzle** is an engaging visual-based sliding puzzle.
It contains **15 movable image pieces**, all derived from a single reference image, arranged inside a **4×4 grid** with one **empty space** to allow movement.

The goal is to **reconstruct the original** image by sliding the tiles into their correct positions.

**This project is ideal for:**

- Web development portfolios
- JavaScript learners
- UI/UX practice
- Game development beginners
- Mini-project & challenge builders

---

## ✨ Features

Here are the **expanded full-feature descriptions**:

- **🎨 Image-Based Sliding Puzzle** - Each tile is a cropped part of a single reference image, giving players a visually engaging experience while solving the puzzle.

- **🔀 Solvable Shuffle System** - The puzzle generates a valid, solvable shuffle every time. Random tile positions are checked to ensure the puzzle is always playable.

- **🎯 Accurate Tile Movement** - Only tiles adjacent to the empty slot can be moved. Clicking a valid tile slides it smoothly into the empty space.

- **✔️ Win Detection Algorithm** - Once the player rearranges all 15 tiles into their original order, the game instantly detects completion and displays a success message with glowing animation.

- **🔁 Reset Button** - Quickly brings the puzzle back to its solved/original state with one click.

- **📸 Reference Image Preview** - A miniature reference image is displayed below the puzzle so players can visually compare and solve faster.

- **🧮 Move Counter** - Tracks the number of tile movements made, helping users challenge themselves or compete with others.

- **⚡ Smooth Animations** - Hover effects, slide transitions, and win animations create a modern and interactive user experience.

- **📱 Fully Responsive Layout** - 

The design adapts perfectly across:

- Desktop
- Laptop
- Tablets
- Smartphones

Tiles resize fluidly using **vw/vh units**, CSS grid, and media queries ensuring readability and playability on any screen.

- **🧩 Lightweight & No Dependencies** - 

Built completely using:

- HTML5
- CSS3 Grid + Flexbox
- Vanilla JavaScript

No external libraries required — fast, simple, and efficient.

---

## ⚙️ Prerequisites

- **Modern web browser** (e.g., Chrome, Firefox, Safari, Edge)  
- **No server required** – Fully front-end and runs locally.  

---

## 💻 Technologies Used

- **HTML5** – Structure and grid container
-**CSS3** – Responsive styling, animations, layout
-**JavaScript** – Tile slicing, shuffling logic, movement detection, win checking.

---

## 📂 Folder Structure

```
Picture-Puzzle-Game/
│
├── index.html      # Main puzzle layout & UI structure
├── style.css       # Styling, animations, responsiveness
├── main.js         # Game logic: shuffle, movement, detection
├── cat3.jpg        # Puzzle image
└── README.md       # Project documentation

```
---


## 🚀 Getting Started

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/Mohamed-Asif-1000/4x4-Sliding-Picture-Puzzle-JavaScript-.git
```

2. Navigate to the Project Folder:
```bash

cd 4x4 Sliding Picture Puzzle JavaScript

```

3. Open index.html in your preferred web browser.

---

## 🧠 How the Game Works

**🔀 Shuffle Logic** - Each time the game loads or you press **Shuffle**, the puzzle pieces are rearranged randomly while ensuring the layout is solvable.

**🎯 Tile Movement** - 

- Click a tile next to the empty space
- The tile slides into the empty spot
- Moves counter increases

**🏆 Winning Condition** - 

The game checks if all tiles match their original index positions.
Once completed:

- A “**Puzzle Completed!**” message appears
- Puzzle board triggers a **glowing animation**
- Player can reset or reshuffle to play again

---

## 🌍 Live Demo

You can view the live version of the website here:  

👉 [https://mohamed-asif-1000.github.io/Number-Puzzle-Game-Interactive-4-4-Sliding-Puzzle/](https://mohamed-asif-1000.github.io/Number-Puzzle-Game-Interactive-4-4-Sliding-Puzzle/)

---


