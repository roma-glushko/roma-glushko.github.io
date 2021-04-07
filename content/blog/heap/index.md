---
path: "/blog/heapify/"
date: "2021-04-06 15:17:00"
title: "Heapify ✌️"
cover: "./markus-spiske-IiEFmIXZWSw-unsplash-min.jpg"
keywords:
    - algorithmic coding
    - data structures
---

## Intro

When you have sequence of candidates to process you build a queue to organize them. In the classical queues, time of adding item to queue defines when it's going to be processed.

What if we need to change this principle and use some **relative importance score** to determine item processing sequence?

Well, then we would reinvent ~~bicycle~~ priority queue.

**Priority Queue or Heap** is a data structure that allows to efficiently retrieve next queued item with min or max importance score.

## Nearly Complete Binary Tree

Heap can be represented as an array or a list that is visualized as nearly complete binary tree:

![Max Heap](./img/max-heap.png "Max Heap")
<div class="image-title">Max Heap</div>

Since it's a binary tree **all parent nodes** have **at max 2 children**. Binary tree is filled level by level from top to bottom, from left incomplete parent nodes (with none or one child) to right ones.

With such a node positioning, we can come up with formulas for finding parent/children nodes:

- $element\_idx / 2$ is the node parent index
- $2 * element\_idx$ is an index of left child
- $2 * element\_idx + 1$ is an index of right child

where $element\_idx$ is some node index.

Additionally binary tree has the following useful properties:

- Heigh of the tree is $ln(N) + 1$

"Nearly complete" means that **not all tree levels** may be **filled out** by leaf nodes (nodes without children). Other words we can have a heap with any number of items.

Heap has a distinct property that actually makes it helpful:

- all children node values should be **less or equal** to parent node value (**max heap property**)
- or all children node values should be **more or equal** to parent node value (**min heap property**)

## Heap Building

`video: title: "Short demo": ./img/heapify.mp4`
<div class="image-title">Max Heapifying</div>

```python
def heapify(stones: List[int], node_idx: int) -> List[int]:
    n = len(stones)
    largest_idx = node_idx
    
    # formulas for zero-indexed arrays
    l_idx = 2 * node_idx + 1
    r_idx = 2 * node_idx + 2
    
    if l_idx < n and stones[l_idx] > stones[largest_idx]:
        largest_idx = l_idx
    
    if r_idx < n and stones[r_idx] > stones[largest_idx]:
        largest_idx = r_idx
    
    if largest_idx != node_idx:
        tmp = stones[node_idx]
        stones[node_idx] = stones[largest_idx]
        stones[largest_idx] = tmp
        
        return heapify(stones, largest_idx)
        
    return stones
    
def build_heap(stones: List[int]) -> List[int]:
    n = len(stones)
    
    for i in range(n // 2, -1, -1):
        stones = heapify(stones, i)
        
    return stones
```

## Adding a New Element to Heap

TBU

## Extracting Max Element from Heap

TBU

## Heap Sort

TBU

## Applications

TBU

## References

- <a target="_blank" rel="noopener nofollow" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-4-heaps-and-heap-sort/">MIT 6.006 - Heaps and Heap Sort</a>
- <a target="_blank" rel="noopener nofollow" href="https://visualgo.net/en/heap">Heap Visualized</a>