# 简历产品核对与岗位匹配说明

调研日期：2026 年 10 月 29 日。本站署名为 yuanguo。个人经历以原简历和本人在本轮对话中补充的内容为准；企业产品介绍、芯片规格和招聘要求仅作背景核对与表达参考。

## 本次确认的信息

本人确认在南京沃旭负责终端固件、基站/网关、无线协议和驱动；涉及 STM32F407、STM32H743、Apollo、Nordic、OM6626、OM6629、DW1000、DW3000、MK8000 等平台。此前已确认 2021—2023 洲斯物联软件经理、2023 年至今南京沃旭 UWB / 无线 / EPD 系统开发经历。

规范型号名称时，保留 Apollo、Nordic 的系列名称，未推断 Apollo 版本或 Nordic 的具体 SKU。未根据芯片功能推断本人实现过其全部算法或协议。

## 公司产品核对

| 来源 | 核对结果 | 简历中采用的内容 |
| --- | --- | --- |
| [沃旭公司介绍](https://m.woxuwireless.com/about.html) | 公司全称为南京沃旭通讯科技有限公司，业务涉及工业定位与物联网 | 规范公司名称，保持本人任职时间与职责范围 |
| [沃旭产品介绍](https://m.woxuwireless.com/) | 包含 UWB 定位和 EPD 电子纸相关系统 | 简要说明工业定位的产品场景，不把全部公司产品写成个人项目 |
| [沃旭 EPD 方案](https://www.woxuwireless.com/previewSolution/241/) | 电子纸终端通过无线网关与业务系统连接，服务制造与仓储的无纸化信息展示 | 将 EPD 展开为电子纸，明确标注为“产品背景” |
| [洲斯官方介绍](https://www.zksiot.com/zh/关于我们/) | 温湿度监测、环境终端、冷链网关及平台管理构成其产品与业务范围 | 补充冷链及温湿度监测背景，个人项目仍沿用 S6 / S6S、G1 等原简历记录 |

部分沃旭官网页面直连超时，相关内容同时通过搜索引擎返回的官网索引核对。未将企业产品当前的具体型号、最新客户案例或宣传指标追溯为本人任职期间的成果。

苏州中太、禾硕等早期雇主未找到足够清晰、可可靠匹配的现行官方产品资料，继续保留原简历中的 POWER BMC、票据 / 标签打印设备描述；不替换成同名企业，不补充未经确认的具体整机型号。

## 芯片分类核对

| 平台 | 参考资料 | 使用边界 |
| --- | --- | --- |
| STM32F407 / STM32H743 | [ST 官方应用笔记](https://www.st.com/resource/en/application_note/an5020-introduction-to-digital-camera-interface-dcmi-for-stm32-mcus-stmicroelectronics.pdf) | 仅规范 MCU 型号，未因应用笔记内容添加摄像头开发经历 |
| Apollo | [Ambiq Apollo 官方资料](https://contentportal.ambiq.com/sv/apollo) | 保留系列名，不推断具体代际、功耗指标或应用产品 |
| OM6626 / OM6629 | [昂瑞微官方说明](https://www.onmicro.com.cn/rdzx/795.html) | 核对为 BLE / 2.4GHz 无线 SoC 相关平台，不添加某协议版本的实现经历 |
| DW1000 / DW3000 | [Qorvo DW1000 产品资料](https://store.qorvo.com/products/detail/dw1000itr13-qorvo/681945/)、[Qorvo DW3000 系列官方说明](https://www.qorvo.com/about/news-events/news-releases/2021/qorvo-solutions-interoperable-with-apple-u1-chip-for-new-ultra-wideband-enabled-experiences) | 核对 UWB 分类，未混淆芯片 DW 与模块 DWM，也未推断具体 DW3000 子型号 |
| MK8000 | [FiRa 联盟收录的 MKSemi 产品资料](https://www.firaconsortium.org/devices-dev-tools/mk8000) | 归为 UWB 平台，未将产品认证、测距精度或低功耗规格当作个人成果 |

## 相关岗位匹配

岗位页面为公开招聘样例，用于分析职责与关键词，不代表本人已投递，也不保证岗位仍在开放。不把学历专业要求等招聘条件改写为本人的教育背景。

| 方向 | 官方岗位参考 | 已有经历支持的匹配点 | 不直接加入简历的岗位要求 |
| --- | --- | --- | --- |
| 嵌入式软件 / 无线物联网 | [来可电子嵌入式软件岗位](https://www.njlike.com/Recruitment/) | C/C++、ARM MCU、终端固件、RTOS、驱动、设备接口；最新补充的 UWB / 无线 / EPD 研发 | 未确认的 CAN、SD Card 等专项经历 |
| 嵌入式 Linux / BSP | [来可电子 Linux 岗位](https://www.njlike.com/Recruitment/) | U-Boot、kernel、rootfs、外设驱动、网络通信、MQTT 平台对接及应用移植 | 未确认的 RK3568、车载以太网、SOME/IP、DoIP、OTA 等具体经历 |
| 软件技术管理 | 本人 2021—2023 年软件经理职责记录 | 产品预研、技术指导、疑难问题攻关、功能迭代及客户需求适配 | 未确认的团队人数、招聘职责、预算、交付周期和管理绩效 |
| BMC 软件研发（既往技术方向） | [赛昉 OpenBMC 工程师岗位](https://www.starfivetech.com/index.php?c=category&id=6) | POWER / AMI BMC、IPMI 服务端、设备驱动、客户需求开发；OpenBMC 预研、Yocto / BitBake 构建与适配 | 未确认的 Redfish、MCTP、KVM、Virtual Media 等；不把 OpenBMC 预研升级成全部功能量产经验 |

建议以“嵌入式软件研发 / 无线物联网系统开发”为主线，突出当前终端、基站/网关、协议及驱动的覆盖范围；Linux / BMC 保留技术深度，软件经理经历体现技术组织能力。此为基于现有经历和岗位样例的匹配判断，不是企业对候选人的评价。

## 文案调整与验证计划

- [x] 将笼统技术清单改为“专业方向—平台—工作模块”的结构，优先展示最新工作。
- [x] 为两家近期雇主补充简短产品场景，并与个人职责明确区分。
- [x] 保留 AMI 产品开发与 OpenBMC 预研之间的事实边界，保留本科行政管理学历。
- [x] 最新职责与芯片进入生成页面的回归检查，先观察旧内容失败。
- [ ] 构建、完整测试及内容审查后提交并发布。

本地验证：`npm run check` 的 9 项测试通过，包含最新职责和全部新增芯片名的生成页面检查。独立内容审查确认个人职责与企业产品背景区分清楚；根据审查将 2018 年项目标题保持为“S6 系列温湿度终端”，未把后来记录的 S6S 范围追溯到早期项目。页面结构与打印规则未改变，本轮未新增浏览器视觉或打印验收结论。

尚未提供可公开量化的团队规模、出货量、功耗、定位精度、时延、缺陷率或工期改善数据，因此不填写这些数字。后续如有确认数据，可按“问题—个人工作—经确认结果”补充。
