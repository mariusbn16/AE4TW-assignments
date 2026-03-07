## 1. Why use `clamp()` instead of Media Queries?

The `clamp(minimum, preferred, maximum)` function allows for fluid typography and spacing.

Unlike medias queries wich create jumps at specific breakpoints, `clamp()` scales linearly. The design feels smooth across every possible screen width, not just specific devices. 
Also, one line of `clamp()` can often replace three or more `@media` rules.

## 2. Why use `minmax()` instead of fixed columns?

In a Grid layout, using `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` is superior to fixed widths. `minmax(250px, 1fr)` tells the browser: "The column must be at least 250px, but if there is extra space, fill it up.  Combined with `auto-fit`, columns will automatically wrap to the next line when the screen gets too narrow. This removes the need for manual media queries to adjust column counts. Fixed columns often cause horizontal scrolling on smaller screens. `minmax()` prevents this by allowing the grid to adapt to the container's width.

## 3. Why is it important to implement a Mobile-First website?

Mobile-first design involves writing CSS for the smallest screens first and then adding complexity for larger screens using `min-width` media queries. Mobile devices often have less processing power and slower data. Loading a simple, optimized layout first is more efficient.

## 4. What happens if we remove the variables defined in `:root`?

CSS Variables act as the "source of truth" for your design system. If they are deleted:
* Every property relying on a variable will lose its value. The browser will fall back to its default.
* Maintenance Nightmare: If you want to update your primary color, you would have to find and replace every single hex code in your CSS file manually, rather than changing just one line in the `:root`.
