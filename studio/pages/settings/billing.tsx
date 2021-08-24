import SettingsLayout from 'components/layouts/SettingsLayout'
import { Typography } from '@supabase/ui'

export default function General() {
  return (
    <SettingsLayout title="Billing">
      <div className="p-4">
        <Typography.Title level={4}>Billing Settings</Typography.Title>
      </div>
    </SettingsLayout>
  )
}
