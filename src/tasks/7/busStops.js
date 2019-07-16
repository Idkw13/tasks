const number = (busStops) => busStops.reduce((sum, [e, ex]) => sum + e - ex, 0)
