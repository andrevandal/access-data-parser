---
name: Feature request
about: Suggest an idea for this project
title: "[Feature]"
labels: enhancement
assignees: ''

---

### Add support to Yahoo Search (example)

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

#### Params:
> (more in https://github.com/derevandal/access-data-parser/blob/master/README.md#params-supported)

 - `referrer`

#### Condition
> (logic condition to active this option)

`referrer.match(/search.yahoo.com/)`

#### Format to
> (standard parameters)

- **source**: `yahoo`
- **medium**: `organic`
