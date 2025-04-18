class TimerButton extends EngineObject
{
    constructor(pos, time)
    {
        super(pos, vec2(5.5));
        this.time = time;
        this.timer = new Timer;
    }

    update()
    {
        if (mouseWasPressed(0) && isOverlapping(this.pos, this.size, mousePos))
            this.timer.isSet() ? this.timer.unset() : this.timer.set(this.time);
    }

    render()
    {
        this.color = this.timer.isSet() ? this.timer.active() ? BLUE : RED : GRAY;
        drawRect(this.pos, this.size, this.color);
        if (this.timer.isSet())
        {
            drawTextOverlay(this.timer.get().toFixed(1), this.pos.add(vec2(0,1)), 2);
            const percent = this.timer.getPercent()*100|0;
            drawTextOverlay(percent+'%', this.pos.add(vec2(0,-1)), 2);
        }
        else
            drawTextOverlay('Click\nto set', this.pos, 2);
    }
}

function gameInit()
{
    new TimerButton(vec2(-7, 0), 3);
    new TimerButton(vec2( 0, 0), 1);
    new TimerButton(vec2( 7, 0), 0);
}