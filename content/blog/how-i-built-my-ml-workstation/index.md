---
path: "/blog/how-i-built-my-ml-workstation/"
date: "2021-04-07 15:17:00"
title: "How I built my ML workstation 🔬"
cover: "./machine-learning-workstation.jpg"
keywords:
    - machine learning
    - computer engineering
---


Kaggle Kernels and Google Colab are great.

<div style="width:100%;height:0;padding-bottom:73%;position:relative;"><iframe src="https://giphy.com/embed/UmBdALbYTmCJ2" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/UmBdALbYTmCJ2"></a></p>

I would drop my mic at this point if this article was not be about building a custom ML workstation.

There is always some "buts" that makes our lives harder. When you start to approach nearly real life problems and see hundreds of gigabytes large datasets, your gut feeling starts to tell you that your CPU or AMD GPU devices are not going to be enough to do meaningful things. This is how I came here.

I was taking part in <a href="https://www.kaggle.com/c/hpa-single-cell-image-classification">Human Protein Atlas (HPA) - Single Cell Classification</a> competition on Kaggle. HPA dataset contains nearly 150Gb of 8bits 4-channels protein images. 16bits variant of the dataset holds 350Gb.

Here is what I had at my disposal:

- MacBook Pro 2019 (Intel Core i9 && Intel UHD Graphics 630 1536MB && 16GB DDR4)
- ~30h GPU and/or ~30h TPU hours per week on Kaggle Kernels

Sounds good. I though I would be able to prototype locally and then execute notebooks on the cloud GPU. What could go wrong?

## Life Without GPU

As it turned out, there are a lot of frictions in the mentioned workflow.

First of all, my solution source code quickly became an entire project with a lot of source code and dependencies. I used <a href="https://python-poetry.org/">poetry</a> as a package manager and decided to generate an installable package every time I made meaningful changes to the project in order to test them in the cloud. These installable packages I was uploading into a private Kaggle dataset which in turn was mounted to a notebook. The notebook was calling classes and functions from the package.

This approach to bring a full-size project turns out to have underwater stones. Kaggle notebooks randomly thrown weird errors after installing project packages. I think it was related to dependency version mismatch and I spotted errors like "method X is not found in package Y", etc. Autoreload was not helpful. Several mornings in a row I started my day dealing with new and new suddenly occurred unearthly issues.

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/l2YWmG9FBDtiqHTi0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/gilmoregirls-netflix-gilmore-girls-l2YWmG9FBDtiqHTi0"></a></p>

While working on the competition, I switched from Keras to PyTorch. PyTorch is much slower on CPU then TensorFlow or Keras. It was time consuming to even perform a dev run of my recent changes. However, PyTorch has outstanding support in academic and other ML-associated communities which means a bunch of (**almost**) read-to-use examples of state-of-art technics.

Also, when you run your code in the cloud, you can not easily experiment. You have to plan what you are going to experiment with and make that part somehow configurable.

All in all, the experience was frustrating. I clearly realized if I wanted to do more complex deep learning experiments and projects, then I just need to have 24/7 access to any kind of GPUs.

## Investigation

I have never been interested in custom PC building, hardware or gaming. It took me a while to understand what did it cost me to build a deep learning machine.

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/kxkmUjgUwzhk7uIxOA" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/hyperrpg-twitch-kollok-kollok1991-kxkmUjgUwzhk7uIxOA"></a></p>

There are a lot of resources on building gaming PCs. While building a deep learning workstation sounds like a similar task, there are nuances that should be accounted in order to build a cost-efficient and ML-compatible machine.

I have found a few useful blog posts which helped me to quickly grasp the topic. Particularly, I could highlight two posts from <a target="_blank" rel="noopener" href="https://twitter.com/Tim_Dettmers">Tim Dettmers</a>:

- <a target="_blank" rel="noopener" href="https://timdettmers.com/2018/12/16/deep-learning-hardware-guide/">A Full Hardware Guide to Deep Learning</a>
- <a target="_blank" rel="noopener" href="https://timdettmers.com/2020/09/07/which-gpu-for-deep-learning/">Which GPU(s) to Get for Deep Learning: My Experience and Advice for Using GPUs in Deep Learning</a>

In his blog, Tim explained at length importance of each PC part for ML workstation and provides general pieces of advice on choosing them. Here I'm going to mention information that was helpful for me along with details Tim did not focus on.

Also, <a target="_blank" rel="noopener" href="https://pcpartpicker.com">PCPartsPicker's Builder</a> was super helpful during planning PC. It suggested possible components compatibilities and things to check before ordering the list. It helped to overcome my constant fear that I could buy something that would not work together.

## Parts for ML build

When it comes to building a deep learning machine (or any custom PC), there are 8 parts that should be considered:

- <a href="#gpu">GPU</a>
- <a href="#motherboard">Motherboard (a.k.a. MoBo)</a>
- <a href="#cpu">CPU</a>
- <a href="#ram">RAM</a>
- <a href="#storage">Storage</a>
- <a href="#power-system-unit">Power System Unit (PSU)</a>
- <a href="#cooling">Cooling</a>
- <a href="#pc-case">PC case</a>

Here is an overview:

### GPU

GPU is **the key component** of any ML workstation. It's designed to perform computations on much **larger chunks of data** (then CPU) **in parallel** which makes it perfect for model training or inference (<a target="_blank" rel="noopener" href="https://www.quora.com/Why-are-GPUs-well-suited-to-deep-learning/answer/Tim-Dettmers-1" title="Why GPU is faster then CPU?">here is details</a>). 

With that being said, there are roughly the main GPU characteristics:

- Memory Bandwith
- Tensor Cores
- Shared Memory and L1 Cache Size

### Motherboard

TBU

### CPU

TBU

### RAM

TBU

### Storage

TBU

### Power System Unit

TBU

### Cooling

TBU

### PC Case

TBU

## My Parts List

Creating a multi-GPU cluster was not on my list. Yet still I wanted to have a room for improvements. So I took <a target="_blank" rel="noopener" href="https://pcpartpicker.com/user/tim_dettmers/saved/#view=mZ2rD3">2-GPUs barebone from Tim's templates</a> as a base for my workstation and adjusted it a bit to match what I could find on the local market. Here is my final list of components:

- GPU: <a target="_blank" rel="noopener" href="https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932359">Gigabyte GeForce RTX 3070 8Gb Aorus Master</a>
- Matherboard: <a target="_blank" rel="noopener" href="https://www.newegg.com/msi-performance-gaming-x470-gaming-plus-max/p/N82E16813144266">MSI x470 Gaming Plus</a>
- CPU: <a target="_blank" rel="noopener" href="https://www.newegg.com/amd-ryzen-5-3600/p/N82E16819113569">AMD Ryzen 5 3600</a>
- RAM: <a target="_blank" rel="noopener" href="https://www.newegg.com/g-skill-32gb-288-pin-ddr4-sdram/p/N82E16820232091">G.Skill Ripjaws V Series 32Gb (2 x 16Gb)</a>
- Storage: <a target="_blank" rel="noopener" href="https://www.newegg.com/samsung-970-evo-plus-500gb/p/N82E16820147742">Samsung 970 Evo 500Gb M.2-2280 NVME</a>
- Cooling: <a target="_blank" rel="noopener" href="https://www.newegg.com/cooler-master-hyper-212-black-edition-rr-212s-20pk-r1/p/N82E16835103278">Cooler Master Hyper 212 Black Edition</a>
- PSU: <a target="_blank" rel="noopener" href="https://pcpartpicker.com/product/MfJwrH/evga-power-supply-220g20750xr">EVGA G2 750W 80+ Gold</a>
- PC Case: <a target="_blank" rel="noopener" href="https://www.newegg.com/matte-black-nzxt-h-series-h510-atx-mid-tower/p/N82E16811146315">NZXT H510</a>
- Wireless Adapter: <a target="_blank" rel="noopener" href="https://www.newegg.com/tp-link-archer-t2u-plus-usb-2-0/p/N82E16833704471">TP-Link Archer T2U Plus</a>

The same list on PCPartsPicker can be found <a target="_blank" rel="noopener" href="https://pcpartpicker.com/user/roman-glushko/saved/8gZHGX">here</a>.

![GPU Price Dynamics: end of 2020 - beginning of 2021](./img/gpu-price-dynamics.png "GPU Price Dynamics: end of 2020 - beginning of 2021")
<div class="image-title">GPU Price Dynamics: end of 2020 - beginning of 2021. Wild time</div>

## Hardware Installation

![PC Parts](./img/pc-parts.jpg "PC Parts")
<div class="image-title">PC parts arrived. I think I could build a new house with these boxes. Stay tuned for more</div>

## Software Installation

## CUDA Setup

## References

- <a target="_blank" rel="noopener" href="https://timdettmers.com/2018/12/16/deep-learning-hardware-guide/">A Full Hardware Guide to Deep Learning</a>
- <a target="_blank" rel="noopener" href="https://timdettmers.com/2020/09/07/which-gpu-for-deep-learning/">Which GPU(s) to Get for Deep Learning: My Experience and Advice for Using GPUs in Deep Learning</a>
- <a target="_blank" rel="noopener" href="https://pcpartpicker.com/user/tim_dettmers/saved/#view=mZ2rD3">Deep Learning Barebones on PCPartPicker</a>