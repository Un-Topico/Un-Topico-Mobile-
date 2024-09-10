import React, { createContext, useState, useEffect } from 'react';
import { storeUser, getUser, removeUser } from './auth';

const login = async (userData) => {
    setUser(userData);
    await storeUser(userData);
  };

  const logout = async () => {
    setUser(null);
    await removeUser();
  };