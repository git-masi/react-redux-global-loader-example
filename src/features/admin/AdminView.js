import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearAdminInfoLoader,
  fetchAdminInfo,
  selectAdmin,
} from './adminInfoSlice';
import {
  clearAdminSettingsLoader,
  fetchAdminSettings,
  selectSettings,
} from './adminSettingsSlice';

export default function AdminView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdminInfo());
    dispatch(fetchAdminSettings());
    return () => {
      dispatch(clearAdminInfoLoader());
      dispatch(clearAdminSettingsLoader());
    };
  }, [dispatch]);

  return (
    <div style={{ padding: '1rem' }}>
      <AdminSidebar />
      <AdminSettings />
    </div>
  );
}

function AdminSidebar() {
  const admin = useSelector(selectAdmin);
  return (
    <div
      style={{
        marginBottom: '1rem',
        padding: '1rem',
        border: '1px solid black',
      }}
    >
      <p>{admin.id}</p>
      <p>{admin.access}</p>
    </div>
  );
}

function AdminSettings() {
  const settings = useSelector(selectSettings);
  const entries = Object.entries(settings);
  return (
    <div
      style={{
        marginBottom: '1rem',
        padding: '1rem',
        border: '1px solid black',
      }}
    >
      {entries.map(([key, value]) => (
        <p key={key}>
          {key}: {`${value}`}
        </p>
      ))}
    </div>
  );
}
