# Week 5

## Exercise 1: Implement `drawShapes`

In [script.js](/music-animator/script.js) there's an empty method called `drawShapes`.
In this method we'll want to call our draw functions from Exercise 1 with randomly
generated values. To create random values there are three methods you'll need:

*  `generateRandomValue(min, max)` 
*  `generateRandomColor()`
*  `generateRandomPoint()`

###  Step 1: `generateRandomPoint`

Right now `generateRandomPoint` only returns (0, 0). You'll need to create implement
this method so that it returns a random point on the XY grid. The return type should
be an Object that has the keys, x and y, and values equal to the output of 
generateRandomValue().


### Step 2: `drawShapes`

Use the 3 helper functions, `generateRandomValue`, `generateRandomColor`, and `generateRandomPoint`
to call `drawSquare` and `drawCircle` with random values.


### Challenge:

Update `generateRandomPoint` so that it takes a range of X and Y values. Then use
that to only draw squares on the left half of the screen and circles on the right
half.


## Exercise 2: Add animations when the music plays

In [script.js](/music-animator/script.js) there's a callback function passed
into `requestAudio`. We want to start animations when the music starts playing.
1.  Instantiate `MyVisualizer` and call `startVisual`.
2.  In `updateVisual` we'll want to call our `drawShapes` function.

## Exercise 3: Animate to **the beat** of the music

In [script.js](/music-animator/script.js) MyVisualizer class has a method called
`updateVisual` which changes **when the visuals should be drawn**.
*  In `updateVisual`, we'll want to call our `drawShapes` function when the
    audioEl's `currentTime` *is greater or equal to* the peak's `timeOfPeak` (see
    NOTE below for more details)
*  Create this logic using an `if`-statement

Using this information you should be able to animate your shapes to
the beat of the music. This is meant to be a challenge so if you found this confusing...
Then use the chrome debugger and your teammates to figure out what's going on.

NOTE: There's a field on `MyVisualizer` named `peaks` and it contain an array 
of `Peak`. Peak has a field called `timeOfPeak`. `audioEl` has a field called
`currentTime`. 

### Challenge:

In `drawShape` call a random draw method so that circle, square, and or
rectangle are randomly chosen. 

*HINT:* you can generate a random number between 0 and 1 with `Math.random()`.
