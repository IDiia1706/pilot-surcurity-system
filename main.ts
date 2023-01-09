let Pitch = 0
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    if (Pitch < 20) {
        basic.showIcon(IconNames.Asleep)
    } else if (Pitch < 30) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
    } else if (Pitch < 45) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else if (Pitch > 45) {
        basic.showIcon(IconNames.Skull)
        basic.showIcon(IconNames.Ghost)
    }
})
