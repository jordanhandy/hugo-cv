---
title: RHEL Server Decomissioned - Ubuntu is Live
date: 2021-07-04T12:08:41.949Z
publishdate: 2021-07-02T12:08:41.974Z
description: After some incompatibilities with my Docker containers originally
  running on a RHEL server, the server needed to be decommissioned for Ubuntu.
draft: false
disableComments: true
authors:
  - Jordan Handy
url: "{{slug}}"
categories:
  - General
  - Infrastructure
Tags:
  - Infrastructure
---
After some incompatibilities with my Docker containers originally running on a **RHEL** server, the server needed to be decommissioned for **Ubuntu**.

Here was the game plan:

1. Back up all important data from the RHEL server
2. Spin up Ubuntu server
3. Re-configure Docker and containers on Ubuntu server
4. Restore any critical data to new Docker containers on Ubuntu 
5. Ensure all DNS routing to the new server was in place
6. Reconfigure dependencies outside of the server to point to the new address
7. Wait for DNS propagation
8. Decommission the older server

This post is tonfirm that the migration was successful.