# Flex-box:

The Flexbox Layout officially called CSS Flexible Box Layout Module is new layout module in CSS3 made to improve the
items align, directions and order in the container even when they are with dynamic or even unknown size. The prime
characteristic of the flex container is the ability to modify the width or height of its children to fill the available
space in the best possible way on different screen sizes.

Flexbox is similar to the block layout, except that it lacks many of the properties that can be used in a block layout,
such as floats and columns. But then again it has more flexibility for distributing space and aligning content in ways
that web applications and complex web pages often need. It solves many other layout problems that we have been fighting
against and trying to solve for a very long time—such as vertical centering, for example, among many others.

Flexbox allows you to lay out elements in a container, arrange and (re)order them, align them, and distribute the space
between (and/or around) them, regardless of their size. It allows you to make them literally flexible—items inside a
container can be stretched and shrunk to accommodate the available space, and can be sized in proportionally to each
other, and any available space between or around them can be distributed among them based on a proportion that you get
to specify.

Using flexbox, you can also lay elements out inside a container in either directions: horizontal or vertical, called the
flex directions; you’re not bound to just one direction as in other layout modes. This allows for the creation of more
adaptive and responsive layouts that adapt to the layout changes on different screen sizes and orientations.

##Create Flexible layout (Container and items)

The first step to start using Flexbox is to create a flex container. Children of a flex container are called the flex
items, and are laid out inside the flex container using the Flexbox properties. Some of the Flexbox properties apply to
the container, others are applied to the flex items.

A flex container is created by setting the display property of an element to either flex or inline-flex.

```css
.flex-container {
    display: flex;
}
/* or */
.flex-container {
    display: inline-flex;
}
```

* **flex-direction**

The flex-direction property specifies how flex items are placed in the flex container, by setting the direction of the
flex container’s main axis. This determines the direction that flex items are laid out in. They can be laid out in two
main directions, like rows horizontally or like columns vertically.

```css
flex-direction: row | row-reverse | column | column-reverse
```

- row :
This is the initial value. The flex container’s main axis has the same orientation as the current writing mode. The
main-start is on the left in a left-to-right language, and the main-end is on the right. In a right-to-left language,
the main-start is on the right and the main-end is on the left.

- row-reverse :
Same as row, except the main-start and main-end directions are swapped. The flex container’s main axis has the opposite
orientation as the current writing mode.

- column :
The flex container’s main axis is rotated so that the main-start is at the top and the main-end is at the bottom.
Basically, flex items are laid vertically from top to bottom in a horizontal language. If the language is vertical,
then the column value will be horizontal with respect to the language.

- column-reverse :
Same as column, except that main-start and main-end directions are swapped.

Note that the reverse values do not reverse box ordering; like writing-mode and direction, they only change the
direction of flow. Painting order, speech order, and sequential navigation orders are not affected.

* **flex-wrap**

The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the
cross-axis, which determines the direction new lines are stacked in.

```css
flex-wrap: nowrap | wrap | wrap-reverse
```

- nowrap :
This is the initial value. The flex container is single-line, and all items are laid out on that line, even if it means
they might overflow the container. The direction of the flex line depends on the directionality of the text (see
flex-direction above).

- wrap:
The flex items will wrap onto additional flex lines if there isn’t enough room for them on the first flex line.
Additional flex lines are added in the direction of the cross axis, which is affected by the directionality of the text
(see flex-direction above).

- wrap-reverse :
Same as wrap, except the cross-start and cross-end directions are swapped. This means that additional flex lines are
added in the opposite direction of the cross axis.

Sources:

- http://tympanus.net/codrops/css_reference/flexbox/
- https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS
- https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties
