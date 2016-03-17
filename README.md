# Flex-box:

##config

npm install

add first time gulp dependencies to typings

typings i --save <gulp library name>
typings i --save --ambient <gulp library name>
create the typing inside tools folder

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

**flex-direction**

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

**flex-wrap**

The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the
cross-axis, which determines the direction new lines are stacked in.

```css
flex-wrap: nowrap | wrap | wrap-reverse
```

- nowrap :
This is the initial value. The flex container is single-line, and all items are laid out on that line, even if it means
they might overflow the container. The direction of the flex line depends on the directionality of the text (see
flex-direction above).

- wrap :
The flex items will wrap onto additional flex lines if there isn’t enough room for them on the first flex line.
Additional flex lines are added in the direction of the cross axis, which is affected by the directionality of the text
(see flex-direction above).

- wrap-reverse :
Same as wrap, except the cross-start and cross-end directions are swapped. This means that additional flex lines are
added in the opposite direction of the cross axis.

**flex-flow**

The flex-flow property is a shorthand for setting the flex-direction and flex-wrap properties, which together define
the flex container’s main and cross axes.

```css
flex-flow: <'flex-direction'> <'flex-wrap'>
```

**justify-content**

The justify-content property aligns flex items along the main axis of the current line of the flex container. This is
done after any flexible lengths and any auto margins have been resolved. Typically it helps distribute extra free space
leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size.
It also exerts some control over the alignment of items when they overflow the line.

```css
justify-content: flex-start | flex-end | center | space-between | space-around
```

- flex-start :
This is the initial value. Flex items are packed toward the start of the line.

- flex-end :
Flex items are packed toward the end of the line.

- center :
Flex items are packed toward the center of the line, with equal amounts of empty space between the main-start edge of
the line and the first item on the line and between the main-end edge of the line and the last item on the line. (If
the leftover free-space is negative, the flex items will overflow equally in both directions.)

- space-between :
Flex items are evenly distributed in the line. If the leftover free-space is negative or there is only a single flex
item on the line, this value is identical to flex-start. Otherwise, the first flex item on the line is placed on the
main-start edge of the line, the last flex item on the line is on the main-end edge of the line, and the remaining flex
items on the line are distributed so that the spacing between any two adjacent items is the same.

- space-around :
Flex items are evenly distributed in the line, with half-size spaces on either end. If the leftover free-space is
negative or there is only a single flex item on the line, this value is identical to center. Otherwise, the flex items
on the line are distributed such that the spacing between any two adjacent flex items on the line is the same, and the
spacing between the first/last flex items and the flex container edges is half the size of the spacing between flex
items.

**align-items**

The align-items property is similar to the justify-content property, but instead of aligning flex items in the main
axis, align-items is used to align flex items in the cross-axis (perpendicular to the main axis).

```css
align-items: flex-start | flex-end | center | baseline | stretch
```

- flex-start :
Flex items are packed toward the cross-start of the line.

- flex-end :
Flex items are packed toward the cross-end of the line.

- center :
Flex items are packed toward the center of the line, with equal amounts of empty space between the cross-start edge of
the line and the first item on the line and between the cross-end edge of the line and the last item on the line.
(If the leftover free-space is negative, the flex items will overflow equally in both directions.)

- baseline :
Flex items are aligned such that their baselines align. The item with the largest distance between its cross-start
margin edge and its baseline is flushed with the cross-start edge of the line.

- stretch :
This is the initial value. The flex items are stretched out from the cross-start to the cross-end, while still
respecting the constraints imposed by min-height/min-width/max-height/max-width. Note that if the flex container’s
height is constrained this value may cause the contents of the flex items to overflow the items.

**align-content**

The align-content property aligns a flex container’s lines within the flex container when there is extra space in the
cross-axis, similar to how justify-content aligns individual items within the main-axis. This property has no effect
when the flex container has only a single line.

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch
```

- flex-start :
Lines are packed toward the cross-start of the flex container.

- flex-end :
Lines are packed toward the cross-end of the flex container.

- center :
Lines are packed toward the center of the flex container, with equal amounts of empty space between the cross-start edge
of the container and the first line in the container and between the cross-end edge of the container and the last line
in the container. (If the leftover free-space is negative, the lines will overflow equally in both directions.)

- space-between :
Lines are evenly distributed in the flex container. If the leftover free-space is negative this value is identical to
flex-start. Otherwise, the cross-start edge of the first line in the flex container is placed on the cross-start content
edge of the flex container, the cross-end edge of the last line in the flex container is placed on the cross-end content
edge of the flex container, and the remaining lines in the flex container are distributed so that the spacing between
any two adjacent lines is the same.

- space-around :
Lines are evenly distributed in the flex container, with half-size spaces on either end. If the leftover free-space is
negative this value is identical to center. Otherwise, the lines in the flex container are distributed such that the
spacing between any two adjacent lines is the same, and the spacing between the first/last lines and the flex container
edges is half the size of the spacing between flex lines.

- stretch :
This is the initial value. Lines stretch to take up the remaining space. If the leftover free-space is negative, this
value is identical to flex-start. Otherwise, the free-space is split equally between all of the lines, increasing their
cross size.

**order**

Flex items are, by default, displayed and laid out in the same order as they appear in the source document. The order
property can be used to change this ordering.

The order property controls the order in which flex items appear within their flex container, by assigning them to
ordinal groups. It takes a single <integer> value, which specifies which ordinal group the flex item belongs to.

Then, a flex container lays out its content in order-modified document order, starting from the lowest numbered ordinal
group and going up. Items with the same ordinal group are laid out in the order they appear in the source document.

The initial order of all flex items is zero (0) and the flex items are rendered in the order they appear in the source
code. The order property can also take negative values.

Note that the order in which the flex item appears inside its container changes only on screen, not in the source
document. This means that screen readers will read the flex items in the order they appear in the document source,
not the order specified using the order property. The default traversal order of sequential navigation modes (such as
cycling through links, for example using nav-index or tabindex) is also not affected (except in Firefox, which changes
the order of traversal of links based on the visual order). Hence, you should use the order property only for visual,
not logical, reordering of content.

This property could be useful for reordering blog posts, for example, where you may want to feature a blog post at the
beginning of the page, even if that article is no longer the latest. The logical order that is accessible for screen
readers will be maintained, and the article can be visually replaced without affecting the accessibility.

```css
order: <integer>
```

**align-self**

Flex items can be aligned in the cross axis of the current line of the flex container, similar to justify-content but
in the perpendicular direction. align-items sets the default alignment for all of the flex container’s items. The
align-self property allows this default alignment to be overridden for individual flex items. In order to fully
understand the values and concepts behind this property, please see the align-items property description.

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch
```

- auto :
This is the initial value. A value of auto computes to the value of align-items on the element’s container, or stretch
if the element has no parent. In other words, the item will be aligned based on the default value or the value specified
for the align-items property.

- flex-start :
The flex item is packed toward the cross-start of the line.

- flex-end :
The flex item is packed toward the cross-end of the line.

- center :
The flex item’s margin box is centered in the cross axis within the line. (If the cross size of the flex line is less
than that of the flex item, it will overflow equally in both directions.)

- baseline :
If the flex item’s inline axis is the same as the cross axis, this value is identical to flex-start. Otherwise, it
participates in baseline alignment: all participating flex items on the line are aligned such that their baselines
align, and the item with the largest distance between its baseline and its cross-start margin edge is placed flush
against the cross-start edge of the line.

- stretch :
The flex item is stretched out from the cross-start to the cross-end, while still respecting the constraints imposed by
min-height/min-width/max-height/max-width. Note that if the flex container’s height is constrained this value may cause
the contents of the flex item to overflow the item.

**flex-grow**

The flex-grow property sets the flex grow factor of a flex item. A flex grow factor is a <number> which determines how
much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is
distributed. The initial value is zero (0), and negative numbers are invalid.

If the flex items are laid out on the flex line such that they don’t take up the entire space on that line, you can
“expand” the flex items so that they fill up the entire line. The amount of available space on the line can be
distributed among the flex items following a specific proportion that you can specify using the flex-grow property.
The higher the flex-grow value, the more the item will be allowed to grow relative to the other items.

For example, you can distribute the space among the flex items such that one of these items always gets twice as much
space as the others. You can do that by setting the flex-grow property value to 2 (two). An item with flex-grow: 2 will
grow twice as much as an item with flex-grow: 1—it gets twice as much space as the latter. So, for every one pixel that
the second item gets, the first item grows by two pixels.

```css
flex-grow: <number>
```

**flex-shrink**

The flex-shrink property sets the flex shrink factor of a flex item. A flex shrink factor is a <number> which determines
how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space
is distributed. The flex shrink factor is multiplied by the flex basis (see flex-basis) when distributing negative
space. The initial value is zero (1), meaning that the items don’t shrink by default, and negative numbers are invalid.

If the sum of the main sizes (see concepts and terminology) of all flex items is greater than the main size of the flex
container, you can specify just by how much you want to “shrink” the flex items. The amount by which the flex items’ main
sizes exceed the container’s main size is the negative space. Using the flex-shrink property, you can distribute this
negative space over the flex items. The negative space is distributed in proportion to flex-basis multiplied by the
flex-shrink ratio, where the flex basis is the initial main size of the flex item, before free space is distributed
according to the flex factors.

For example, you can distribute the space among the flex items such that one of these items always gets twice as much
negative space as the others. You can do that by setting the flex-shrink property value to 2 (two). An item with
flex-shrink: 2 will shrink twice as much as an item with flex-shrink: 1—it gets twice as much negative space as the
latter. So, for every one pixel that the second item shrinks, the first item shrinks by two pixels. The higher the
flex-shrink value, the more the item will shrink relative to the other items.

The items in the following demo are laid inside a container that has a main size of 500px. Each of the four items has a
main size basis (or a flex basis) of 200px. The items (combined) obviously have a larger main size than the container’s.
Because this is a Flexbox layout, the items will automatically shrink to fit inside their container. However, using the
flex-shrink property, you can control the ratio by which the items are to be shrunk. Try entering different values for
the flex-shrink property in the following demo to see how the elements shrink.

```css
flex-shrink: <number>
```

**flex-basis**

The flex-basis property takes the same values as the width property, and sets the flex basis: the initial main size
(see concepts and terminology) of the flex item, before free space is distributed according to the flex factors
(see flex-shrink and flex-grow).

Except for auto, flex-basis is resolved the same way as width in horizontal writing modes: percentage values for the
flex-basis property are set relative to the flex container’s inner main size. Also, flex-basis determines the size of
the element’s content box, unless otherwise specified using the box-sizing property.

If the specified flex-basis is auto, the used flex basis is the value of the flex item’s main size property. (This can
itself be the keyword auto, which sizes the flex item based on its contents.)

The flex-basis property is usually used in conjunction with the flex-shrink and flex-grow properties, in the shorthand
flex property.

In the following demo, the flex-basis is used in the flex shorthand. The flex-shrink and flex-grow properties are set
so that the items neither grow nor shrink. The value specified using flex-basis defines the main size of each item. Try
changing the values of all three properties in the flex shorthand to see how the width of the items responds. For
example, try using a different flex-grow value to see how the size of an item changes after positive space is
distributed.

```css
flex-basis: auto | <'width'>
```

**flex**

The flex property is a shorthand property for setting the flex-grow, flex-shrink, and flex-basis properties.

When an element is a flex item, flex is used instead of the main size property (width or height properties, see concepts
and terminology) to determine the main size of the element. If an element is not a flex item, flex has no effect.

The initial value is 0 1 auto. The flex-grow and flex-shrink properties are optional and can be omitted from the flex
declaration.

When the flex-grow value is omitted, it is set to 1. Note that 1 is not the initial value of the flex-grow property! It
is only the value used when flex-grow is omitted from the shorthand declaration.

When the flex-shrink property is omitted, it is set to 1. Note that the flex shrink factor is multiplied by the flex
basis when distributing negative space. (See flex-shrink)

When the flex-basis value is omitted, it is set to 0%.

The initial values of flex-grow and flex-shrink properties are different from their defaults when omitted in the flex
shorthand. This so that the flex shorthand can better accommodate the most common cases.

```css
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

Sources:

- http://tympanus.net/codrops/css_reference/flexbox/
- https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS
- https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties
