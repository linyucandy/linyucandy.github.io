---
title: yuanguo — Resume
layout: resume
lang: en
description: Embedded software engineer with experience in UWB positioning, wireless IoT, EPD systems, terminal firmware, base stations and gateways, protocols, drivers, Linux/BMC, and software team management.
---
<h2 id="overview">Professional Summary</h2>

**Target roles: Embedded Software Development / Wireless IoT Systems Development / Software Technical Management.**

Embedded software developer since 2014, primarily working in C/C++, with experience across MCUs, RTOSs, and embedded Linux. Projects span wireless positioning, electronic paper displays, temperature and humidity monitoring, IoT gateways, server management firmware, and thermal printing devices.

Currently developing **UWB positioning, wireless, and electronic paper display (EPD) systems** at Nanjing Woxu. Responsibilities cover terminal firmware, base stations/gateways, wireless protocols, and drivers across MCU, wireless SoC, and UWB platforms.

Previously served as Software Manager at ZKS IoT, contributing to product feasibility studies, technical guidance, and complex technical problem solving. Experience covers requirements analysis, module design, implementation and testing, customer platform integration, and product maintenance, connecting device-side development with system requirements.

<h2 id="skills">Technical Skills</h2>

- **C/C++ and embedded platforms:** Familiar with common data structures, basic algorithms, and ARM architecture; working knowledge of x86 and POWER platforms. Firmware and driver development experience with STM32F407 / STM32H743, Apollo, Nordic, and OM6626 / OM6629.
- **Wireless terminals and positioning devices:** Terminal firmware, base stations/gateways, wireless protocols, and drivers, including DW1000, DW3000, and MK8000 UWB platforms, as well as wireless and EPD systems.
- **RTOS and cross-platform porting:** Project experience with FreeRTOS and TI-RTOS. Ported between Linux multithreading and RTOS task mechanisms, and migrated MCU/RTOS applications to Linux.
- **Embedded Linux / BSP:** Configuration and build experience with U-Boot, the Linux kernel, BusyBox, and rootfs. Familiar with Linux driver development and the fundamentals of kernel development; contributed to board-level adaptation, driver maintenance, and application porting.
- **Device interfaces and connectivity:** Familiar with TCP/IP, USB, RS-232, RS-485, SPI, and I²C. Development and maintenance experience involving lwIP, HTTP / UDP, MQTT platform integration, Sub-1GHz, BLE, LoRa, and cellular-connected products.
- **Server BMC:** Experience extending AMI BMC for POWER servers, implementing IPMI server-side functionality, and maintaining drivers. Evaluated OpenBMC, built images with Yocto / BitBake, and worked on SoC / BSP adaptation.
- **Debugging and engineering delivery:** Used GDB and Valgrind for debugging and performance analysis. Prepared requirements, design, workflow, and user documentation; supported product testing and customer technical issues.
- **Technical management and collaboration:** Software Manager experience covering product feasibility studies, evaluation of technologies for new business areas, team technical guidance, and complex problem solving. Proficient in reading English technical documentation.

<h2 id="experience">Work Experience</h2>

### Nanjing Woxu — 南京沃旭通讯科技有限公司

**2023–Present · Embedded and Wireless Systems Development**

- Develop terminal firmware and base station/gateway software for UWB positioning, wireless, and EPD systems.
- Develop wireless protocols and drivers, covering device firmware, communication protocols, and low-level driver modules.
- Work across general-purpose MCUs, wireless SoCs, and UWB chips to support firmware development for multiple types of terminals, base stations, and gateways.

### ZKS IoT — 深圳洲斯移动物联网技术有限公司

**2021–2023 · Software Manager**

- Contributed to product feasibility studies and technology evaluation for IoT terminals, wireless connectivity products, and customer platform integration.
- Provided technical guidance to the software team and helped investigate and resolve complex development issues.
- Developed product features, fixed defects, and adapted protocols for customers' private platforms and MQTT platforms, balancing new development with existing product maintenance.

### Suzhou Zhongtai Server (Shenzhen) — 苏州中太服务器（深圳）有限公司

**2019.09–2021.04 · BMC Development Engineer**

- Developed BMC features, updated releases, and improved functionality for POWER server products.
- Analyzed customer requirements and designed, implemented, and tested IPMI server-side modules; maintained BMC tools and device drivers.
- Evaluated OpenBMC and worked on platform adaptation. Prepared technical documentation and supported production testing, defect analysis, and customer technical issues.

### ZKS IoT — 深圳洲斯移动物联网技术有限公司

**2018.04–2019.07 · Embedded Development Engineer**

- Contributed to temperature/humidity terminals and Linux gateways, improving TI-platform application logic, USB communication, user interfaces, and network communication modules.
- Designed and refactored modules based on product requirements; prepared requirements analyses, high-level designs, and workflow documentation.
- Configured embedded Linux systems, developed drivers, and ported existing device-side functionality to Linux.

### Shenzhen Heshuo Computer — 深圳市禾硕计算机有限公司

**2015.01–2018.04 · MCU Embedded Software Development**

- Developed software for receipt and label printers, including module design, implementation, technical documentation, and hardware interface integration.
- Implemented ESC/POS and TSC TSPL command parsing and printing, multilingual bitmap fonts, character sets, and barcode processing.
- Ported MCU/RTOS product functionality to ARM9 + Linux, and developed communication modules for USB, serial ports, Ethernet, Bluetooth, and Wi-Fi.

### Shenzhen Black Arrow Information Technology — 深圳市黑箭信息科技有限公司

**2014.09–2014.12 · C Software Engineer**

- Investigated issues and tuned the performance of Cgminer on Linux.
- Ported related functionality to AVR and STM32 MCUs.
- Implemented MCU-side protocol communication and command parsing for a mining-device cluster management system.

### Shenzhen Huayangtongke — 深圳市华阳通科技术有限公司

**2009.09–2014.05 · QE/PE Engineer**

Worked in quality management and product engineering management in manufacturing.

<h2 id="projects">Selected Projects</h2>

### UWB Positioning, Wireless, and EPD Systems

**2023–Present · Nanjing Woxu**

**Product context:** The company's UWB products support industrial positioning of people, vehicles, and assets. EPD labels connect to wireless gateways and business systems for information display and paperless operations in manufacturing and warehousing. [Company products](https://m.woxuwireless.com/) · [EPD solution](https://www.woxuwireless.com/previewSolution/241/)

**Responsibilities:** Terminal firmware, base stations/gateways, wireless protocols, and driver development.

- Develop firmware for UWB positioning and wireless devices, including terminals and base station/gateway modules.
- Develop wireless protocols and drivers, and contribute to software development for EPD systems.
- MCU / wireless platforms: STM32F407, STM32H743, Apollo, Nordic, OM6626, and OM6629. UWB platforms: DW1000, DW3000, and MK8000.

### Temperature/Humidity Monitoring, IoT Platform Integration, and Wireless Products

**2021–2023 · ZKS IoT**

**Product context:** The company's products and solutions cover temperature/humidity monitoring, environmental monitoring terminals, cold-chain gateways, and platform management. [Company overview](https://www.zksiot.com/zh/关于我们/)

- Adapted protocols and developed features for customer-owned IoT platforms and MQTT platforms, connecting device data with customer systems.
- Contributed to wireless product development and technology evaluation involving Sub-1GHz / 433MHz, 2.4GHz / BLE, and LoRa.
- Maintained 4G/5G and NB-connected product lines, as well as S6 / S6S temperature/humidity devices; supported feature updates, defect resolution, and team technical problem solving.

### POWER Server BMC Platform

**2019.09–2021.04 · Suzhou Zhongtai Server (Shenzhen)**

Technologies: ARM AST2xxx, Linux, POWER, IPMI, OpenBMC, Yocto / BitBake, and AMI BMC.

- **Platform evaluation and builds:** Set up an OpenBMC development environment, investigated Yocto / BitBake build workflows, compiled images, and worked on SoC / BSP board adaptation.
- **Feature development:** Investigated the AMI MDS platform and extended AMI BMC. Analyzed requirements for new IPMI server-side modules and completed design, implementation, and testing.
- **Low-level software and tools:** Investigated Linux 2.6 and AMI extensions, added and maintained device drivers, and developed and optimized BMC system management tools.
- **Issue resolution and support:** Analyzed production-test defects, supported customer technical inquiries, and resolved issues in existing features and drivers.

### G1 Embedded Linux Gateway

**2018.11–2019.07 · ZKS IoT**

An embedded Linux gateway based on the Nuvoton NUC970, receiving data from collection devices and uploading it to cloud platforms.

- Configured and built U-Boot, the Linux kernel, BusyBox, and rootfs to establish the gateway's embedded Linux environment.
- Ported existing device applications to Linux, adapting button, display, and storage modules with the required driver support.
- Prepared module designs and development documentation to support maintenance and subsequent releases.

### S6 Series Temperature/Humidity Terminals

**2018.04–2018.12 · ZKS IoT**

Based on MSP430; technologies included CCS, TI-RTOS, GUI, USB, GPRS, ADC, I²C, and GPIO.

- Analyzed requirements for terminal communication, configuration protocols, and GUI interaction; designed, implemented, and tested software modules.
- Added support for hardware modules, communication protocols, and LCD / OLED display models; designed and implemented bootloader-related functionality.
- Developed debugging modules, feature descriptions, user documentation, and flowcharts to support device debugging and maintenance.

### High-Speed Label Printer

**2017.03–2018.04 · Shenzhen Heshuo Computer**

ARM9 / NUC970 + Linux platform implementing TSC TSPL thermal label printing, compatible with BarTender; technologies included libusb and FreeType.

- Set up the development environment for U-Boot, the Linux kernel, BusyBox, and rootfs.
- Ported TI-platform applications and low-level modules for buttons, buzzers, timers, GPIO, and SPI Flash to Linux.
- Migrated TI-RTOS task and event mechanisms to Linux threads, and lwIP communication to Linux TCP/IP.
- Implemented label-size detection and learning, and the functional module architecture.

### HS-T80 / HS-T58 Series Receipt Printers

**2015.01–2017.03 · Shenzhen Heshuo Computer**

Technologies included STM32 / GD32, TM4C1294, NUC472, FreeRTOS, lwIP, W5500, UART, USB, parallel interfaces, Bluetooth, and Wi-Fi.

- Implemented an ESC/POS command parsing engine, multilingual bitmap fonts, and character-set support.
- Implemented generation and printing of one-dimensional barcodes, QR codes, and PDF417 barcodes.
- Developed communication interfaces, ported and optimized the network stack, and supported Bluetooth / Wi-Fi modules and AT command parsing.
- Implemented embedded web interfaces and CGI-based system configuration.

### MCUminer

**2014.09–2014.12 · Shenzhen Black Arrow Information Technology**

Ported Linux Cgminer functionality to STM32F407, using GDB, Valgrind, FreeRTOS, lwIP, and Keil.

- Implemented SPI communication, HTTP platform integration, JSON parsing, and data repackaging.
- Migrated Linux multithreading to FreeRTOS tasks.
- Supported cluster management through lwIP and UDP broadcasts, implementing MCU-side protocol communication and command parsing.

<h2 id="education">Education</h2>

**Sun Yat-sen University · Administrative Management (Undergraduate)**  
2013.06–2016.06

<h2 id="links">Public Links</h2>

- [GitHub profile](https://github.com/linyucandy)
- [Personal website](https://linyucandy.github.io/)

<p class="resume-source-note">Updated October 2026. Product context is based on publicly available company information. Responsibilities and technical experience reflect information provided by the candidate.</p>
