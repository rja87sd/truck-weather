# truck-weather
Level 2 Week 5 Day 4 Assignment

## Endpoint
https://api.open-meteo.com/v1/forecast  (Open-Meteo, GET)

## What I changed using the docs
I added `&wind_speed_unit=mph`.
Before: https://api.open-meteo.com/v1/forecast?latitude=30.27&longitude=-97.74&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit
After: https://api.open-meteo.com/v1/forecast?latitude=30.27&longitude=-97.74&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph

## Live site
https://rja87sd.github.io/truck-weather/


| # | What changed? | Commit Message | Branch |
|---|---------------|----------------|--------|
| 1 | Added function to fetch the weather. | Fetch the weather | Main |
| 2 | Show the weather on the page. | Show the weather on the page | Main |
| 3 | Made change from the docs | Add a docs-based change | Main |
| 4 | Added assignment questions and answers to README. | Add README | Main |
| 5 | Added Live Pages link | Add Live Pages link | Main |