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
    <div>
      <AdminSidebar />
      <AdminSettings />
    </div>
  );
}

function AdminSidebar() {
  const admin = useSelector(selectAdmin);
  return (
    <div>
      <p>{admin.id}</p>
      <p>{admin.access}</p>
    </div>
  );
}

function AdminSettings() {
  const settings = useSelector(selectSettings);
  const entries = Object.entries(settings);
  return (
    <div>
      {entries.map(([key, value]) => (
        <p key={key}>
          {key}: {`${value}`}
        </p>
      ))}
    </div>
  );
}
