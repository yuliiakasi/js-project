# Key-Value List

A small web app built with **HTML**, **CSS**, and **JavaScript** that lets users create, sort, and delete key-value pairs in the format `Name=Value`.

## Features
- Add pairs in the format `Name=Value`
- Validate input (only letters and numbers)
- Update existing entries if the same key is entered again
- Sort the list by **Name** or **Value**
- Delete multiple selected items using checkboxes
- Responsive design with a simple, clean layout

## How It Works
All pairs are stored in an array of objects:

```js
[{ key: 'name', value: 'value' }]
