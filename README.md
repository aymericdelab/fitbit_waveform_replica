## FITBIT WAVEFORM CLOCK CLONE (with a twist)
The goal of this project is to recreate the default clock made available on my fitbit versa 2.
This clock, also called Waveform is made by Fitbit and available by default on all the sense, versa 2 and versa 3 models. 
The clock shows the hours, minutes and date. But also the number of steps, calories and the current heart rate.

Here you can see the original clock on the top and the replica that I made on the bottom. Quite similar but not perfect.

![waveform](https://github.com/aymericdelab/fitbit_waveform_replica/blob/main/screenshots/Screen%20Shot%202021-03-19%20at%209.58.35%20AM.png?raw=true)

![mywaveform](https://github.com/aymericdelab/fitbit_waveform_replica/blob/main/screenshots/Screen%20Shot%202021-03-19%20at%2010.01.29%20AM.png?raw=true)

## FITBIT SDK
To fitbit sdk allows you to create apps and clocks using Javascript, CSS and SVG.
The fitbit sdk for creating clock faces is quite straight forward. You just need to login on fitbit studio here : https://studio.fitbit.com/.
There you will have access to different templates for fitbit apps, including a simple clock.
Fitbit studio is actually an online IDE from where you can then build and run your project (either on your own fitbit or on the fitbit os simulator (download here: https://dev.fitbit.com/release-notes/fitbit-os-simulator/)

## Layout
The creating and positioning of the elements is done usng SVG and CSS.
### Logos
The logos next to the steps, heartrate and calorie count were taken from an example clock made available by fitbit on their github: https://github.com/Fitbit/sdk-moment

### Font
At first I wanted to import an external font that would be closest to the actual font. But it seems like adding a custom font is not supported natively by the SDK at the moment, so I ended up using one of the default fonts: "System-Light". 

### Background
To retrieve the background I first tried to do a reverse google image search using a small portion of the Waveform clock image where nothing was written. 

![search1](https://github.com/aymericdelab/fitbit_waveform_replica/blob/main/screenshots/Screen%20Shot%202021-03-15%20at%2010.32.05%20PM.png?raw=true)

But none of them really matched what I was looking for.

![search2](https://github.com/aymericdelab/fitbit_waveform_replica/blob/main/screenshots/Screen%20Shot%202021-03-19%20at%2010.30.11%20AM.png?raw=true)

After further searching for a solution, I ended up on this website: https://theinpaint.com/
It lets you upload an image of your choice and "photoshop" the elements you don't want out of the picture. You just need to select the part of the image you want to remove and the tool infers the value of the pixel based on the values of the pixels around it. I was honestly quite impressed by how it turned out.

![inpaint1](https://github.com/aymericdelab/fitbit_waveform_replica/blob/main/screenshots/Screen%20Shot%202021-03-15%20at%2010.37.20%20PM.png?raw=true)

![inpaint2](https://github.com/aymericdelab/fitbit_waveform_replica/blob/main/screenshots/Screen%20Shot%202021-03-15%20at%2010.40.10%20PM.png?raw=true)

![inpaint3](https://github.com/aymericdelab/fitbit_waveform_replica/blob/main/screenshots/Screen%20Shot%202021-03-15%20at%2010.40.21%20PM.png)

## Backend
All the infos on the clock is shown using two event listeners. One for the heart rate, and another one for the clock. Because the event listener for the clock is called every second, I also use it to update the number of steps and the number of calories.

## Twist
With a friend we decided to challenge ourselves by taking a picture of our watches every day at 11pm and compare the numbers of calories burnt during the day. In order to have some fun, I've added the option to add 50 extra calories to the calories counter every time you tap on the screen. The counter will come back to its original count everytime you open up another app.
